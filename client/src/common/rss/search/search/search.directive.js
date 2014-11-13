(function(){
    'use strict';

    angular.module('app.rss.search')
        .directive('searchFeed', function($timeout ,FeedModel){
            function link(scope, element, attrs){
                var time = 500;
                var timer;

                scope.data = {
                    search: null,
                    feeds: {},
                    isShowPreloader: false,
                    error: false
                };

                scope.resetSearch = function () {
                    if(timer){
                        $timeout.cancel(timer);
                    }
                    scope.data = {
                        search: null,
                        feeds: {},
                        isShowPreloader: false,
                        error: false
                    };
                    if(scope.clearSearch){
                        scope.clearSearch();
                    }

                };
                scope.keyUp = function ($event) {
                    scope.data.feeds = {};
                    if(!scope.data.search){
                        if(timer){
                            $timeout.cancel(timer);
                        }
                        scope.data.isShowPreloader = false;
                        scope.data.feeds = {};
                        return false;
                    }

                    if(timer){
                        $timeout.cancel(timer);
                    }

                    timer = $timeout(function () {
                        scope.data.isShowPreloader = true;
                        FeedModel.findFeeds(scope.data.search).then(function (response) {
                            scope.data.isShowPreloader = false;
                            scope.data.feeds = response.data;
                        }, function (response) {
                            scope.data.error = response.data.error;
                            scope.data.isShowPreloader = false;
                        });




                    }, time);

                };
            }

            return {
                restrict: "E",
                link: link,
                replace: true,
                scope: {
                    chooseFeed: "=",
                    clearSearch: "="
                },
                templateUrl: 'rss/search/search/search.view.tpl.html'
            };
        });
})();