(function () {
    "use strict";

    angular.module('app', [
        'ngStorage',
        'ngTouch',
        'ui.router',
        'ngAnimate',

        'restangular',
        'restmod',

        'templates-app',
        'templates-common',

        'app.directives',
        'app.services',
        'app.resource',

        //page
        'app.feed',
        'app.landing',

        'ngMockE2E'
    ])
        .controller('AppCtrl', ['$scope', function($scope){

        }]);
})();
