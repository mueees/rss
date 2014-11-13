(function(){
    'use strict';
    
    angular.module('app.rss')
        .directive('addFeed', function(){

            function link(scope){

                scope.data = {
                    name: "",
                    categories: []
                };

                if( scope.feedUrl ){
                    scope.data.url = scope.feedUrl;
                }else if(scope.feedId){
                    scope.data._id = scope.feedId;
                }

                scope.showCategory = false;

                scope.addCategory = function () {
                    scope.showCategory = !scope.showCategory;
                };

                scope.cancel = function () {
                    scope.showCategory = false;
                    scope.data = {
                        name: "",
                        categories: []
                    };
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
                scope: {
                    feedId: "=",
                    feedUrl: "="
                },
                templateUrl: "rss/add-feed/add-feed.view.tpl.html"
            };
        });
})();