(function () {
    "use strict";

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("home");

        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.tpl.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.tpl.html'
            })
            .state('feed', {
                url: '/feed/:id',
                templateUrl: 'feed/list/feed.tpl.html',
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
    }]);
})();
