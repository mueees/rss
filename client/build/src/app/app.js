angular.module('app', [
    'ngStorage',
    'ngTouch',
    'ui.router',
    'ngAnimate',
    'restangular',

    'templates-app',
    'templates-common',

    'app.directives',
    'app.services',
    'app.resource',

    //page
    'app.feed',

    'ngMockE2E'
])
    .controller('AppCtrl', ['$scope', function($scope){

    }]);