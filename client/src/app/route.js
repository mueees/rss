angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.tpl.html'
        })
        .state('feed', {
            url: '/feed/:id',
            templateUrl: 'feed/feed.tpl.html'
        });
}]);