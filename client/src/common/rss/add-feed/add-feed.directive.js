(function(){
    'use strict';
    
    angular.module('app.rss')
        .directive('addFeed', function(){

            function link(scope){

                scope.showCategory = false;
                scope.addCategory = function () {
                    scope.showCategory = !scope.showCategory;
                };
                scope.cancel = function () {
                    scope.showCategory = false;
                };
                scope.categories = [];

                scope.categoryCreate = function (category) {
                    scope.categories.push(category);
                };
            }
        
            return {
                restrict: "E",
                link: link,
                replace: true,
                scope: {},
                templateUrl: "rss/add-feed/add-feed.view.tpl.html"
            };
        });
})();