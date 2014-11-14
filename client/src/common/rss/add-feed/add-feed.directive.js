(function(){
    'use strict';
    
    angular.module('app.rss')
        .directive('addFeed', function(CategoryModel, FeedModel){

            function link(scope){

                var isCategoryDownloaded = false;

                scope.data = {
                    name: "",
                    categories: []
                };

                //list with all categories
                scope.categories = [];

                //show preloader, when categories fetch
                scope.showFormPreloader = false;
                scope.showAddFeedPreloader = false;
                //show form
                scope.showForm = false;

                if( scope.feedUrl ){
                    scope.data.url = scope.feedUrl;
                }else if(scope.feedId){
                    scope.data._id = scope.feedId;
                }



                scope.addCategory = function () {
                    if(isCategoryDownloaded){
                        scope.showForm = !scope.showForm;
                    }else{
                        scope.showFormPreloader = true;
                        //we should download all categories
                        CategoryModel.getCategories().then(function (response) {
                            scope.categories = response.data.categories;
                            scope.showFormPreloader = false;
                            isCategoryDownloaded = true;
                            scope.showForm = !scope.showForm;
                        }, function () {
                            scope.showFormPreloader = false;
                            isCategoryDownloaded = false;
                        });
                    }
                };

                //send request to server
                scope.addFeed = function () {
                    scope.showAddFeedPreloader = true;
                    var method = (function(){
                        if( scope.feedUrl ){
                            return 'addByUrl';
                        }else if(scope.feedId){
                            return 'addById';
                        }
                    })();

                    FeedModel[method](scope.data).then(function () {
                        scope.showAddFeedPreloader = false;
                        scope.showForm = false;

                    }, function () {
                        scope.showAddFeedPreloader = false;
                        scope.showForm = false;
                    });


                };

                //reset all fields
                scope.cancel = function () {
                    scope.showForm = false;
                    scope.data = {
                        name: "",
                        categories: []
                    };
                };

                scope.categoryCreate = function (category) {
                    scope.categories.push(category);
                };

                scope.$watch('categories|filter:{selected:true}', function (categories) {
                    scope.data.categories = categories.map(function (category) {
                        return category._id;
                    });
                }, true);
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