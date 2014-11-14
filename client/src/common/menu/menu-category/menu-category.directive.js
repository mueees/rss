(function(){
    'use strict';

    angular.module('app.menu')
        .directive('menuCategory', function(CategoryModel, $PubSubFactory, $rootScope, $state, $stateParams){

            function link(scope){

                var state = [
                    'feed.id'
                ];

                CategoryModel.all().then(function (categories) {
                    scope.categories = categories;
                    routeChange();
                });

                scope.activeFeed = null;

                scope.feedClick = function (_id) {
                };

                scope.isActive = function(_id){
                    if( scope.activeFeed == _id ){
                        return true;
                    }  else{
                        return false;
                    }
                };

                scope.isFeedActive = function (category) {
                    var res = _.where(category.feeds, {_id: scope.activeFeed});
                    if(res && res.length){
                        return true;
                    }else{
                        return false;
                    }
                };

                function deselectAllFeed(){
                    scope.activeFeed = null;
                }
                function chooseFeed(id){
                    scope.activeFeed = id;
                }
                function routeChange(){
                    if($state.current.name == 'feed.id'){
                        deselectAllFeed();
                        chooseFeed($stateParams.id);
                    }else{
                        //deselect all feeds
                        deselectAllFeed();
                    }
                }

                $rootScope.$on('$stateChangeSuccess', routeChange);
            }

            return {
                restrict: "E",
                replace: true,
                link: link,
                templateUrl: "menu/menu-category/menu-category.view.tpl.html"
            };
        });
})();