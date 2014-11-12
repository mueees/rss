(function () {
    "use strict";

    angular.module('app.landing')
        .controller("LandingController", function ($scope ,$state, $timeout) {
            $scope.loginAfter = function () {
                $timeout(function () {
                    $state.go('feed');
                }, 200);
            };
        });
})();