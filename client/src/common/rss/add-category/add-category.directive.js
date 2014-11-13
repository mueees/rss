(function(){
    'use strict';
    
    angular.module('app.rss')
        .directive('addCategory', function(CategoryModel){
            function link(scope ){
                scope.category = {
                    name: null,
                    _id: null
                };
                scope.isShowClose = false;

                scope.close = function () {
                    scope.category = {
                        name: null,
                        _id: null
                    };
                    angular.element('input').focus();
                };

                scope.addCategory = function () {
                    CategoryModel.addCategory(scope.category.name).then(function (response) {
                        scope.category._id = response.data._id;
                        if(scope.categoryCreate){
                            scope.categoryCreate(scope.category);
                        }
                        scope.close();
                    });

                };

                scope.$watch('category.name', function () {
                   if(scope.name){
                       scope.isShowClose = true;
                   }else{
                       scope.isShowClose = false;
                   }
                });
            }

            return {
                restrict: "E",
                link: link,
                replace: true,
                scope: {
                    categoryCreate: '='
                },
                templateUrl: "rss/add-category/add-category.view.tpl.html"
            };
        });
})();