(function(){
    'use strict';

    angular.module('app.menu')
        .directive('menuCategory', function(CategoryModel, $PubSubFactory){
            function link(scope){
                CategoryModel.all().then(function (categories) {
                    scope.categories = categories;
                });

                scope.activeFeed = null;

                scope.feedClick = function (_id) {
                    scope.activeFeed = _id;
                    $PubSubFactory.publish('activeFeed', scope.activeFeed);
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
            }

            return {
                restrict: "E",
                replace: true,
                link: link,
                templateUrl: "menu/menu-category/menu-category.view.tpl.html"
            };
        });
})();