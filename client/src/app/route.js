(function () {
    "use strict";

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("rss");

        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.tpl.html',
                data: {
                    authorized: false
                }
            })
            .state('feed', {
                url: '/rss',
                templateUrl: 'home/home.tpl.html',
                data: {
                    authorized: true
                }
            })
            .state('feed.search', {
                url: '/search',
                templateUrl: 'search/search.tpl.html',
                data: {
                    authorized: true
                }
            })
            .state('feed.id', {
                url: '/feed/:id',
                templateUrl: 'feed/list/feed.tpl.html',
                data: {
                    authorized: true
                },
                resolve: {
                    feed: function (FeedModel, $stateParams) {
                        return FeedModel.getById($stateParams.id);
                    }
                },
                controller: function ($scope, feed) {
                    $scope.data = {};
                    $scope.data.feed = feed;
                }
            });
    }]).run(function ($rootScope, Security, $state) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorized;

            try{
                authorized = next.data.authorized;
            } catch (e){
                throw new Error("Route doesn't have authorized option");
            }

            if(!authorized){
                return false;
            }

            if (!Security.isAuthenticated()) {
                event.preventDefault();
                $state.go('landing');
            }
        });
    });
})();


