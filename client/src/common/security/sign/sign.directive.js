(function(){
    'use strict';

    angular.module('app.security')
        .directive('sign', function(Security){
            function link($scope){

                $scope.authError = null;
                $scope.message = null;
                $scope.disableBtn = false;

                $scope.user = {
                    email: null,
                    pass: null
                };

                $scope.login = function () {
                    $scope.authError = null;
                    $scope.disableBtn = true;

                    Security.login($scope.user.email, $scope.user.pass).then(function (user) {
                        if($scope.loginAfter){
                            $scope.loginAfter();
                        }
                        $scope.disableBtn = false;
                    }, function (response) {
                        $scope.disableBtn = false;
                        $scope.authError = response.data.error;
                    });
                };

                $scope.register = function () {
                    $scope.authError = null;

                    Security.register($scope.user.email, $scope.user.pass).then(function (response) {
                        $scope.message = response.message;
                        $scope.disableBtn = false;
                    }, function (response) {
                        $scope.disableBtn = false;
                        $scope.authError = response.data.error;
                    });

                };

                $scope.reset = function () {
                    $scope.authError = null;
                    $scope.user = {
                        email: null,
                        pass: null
                    };
                };


            }

            return {
                restrict: "E",
                link: link,
                replace: true,
                scope: {
                    loginAfter: "="
                },
                templateUrl: "security/sign/sign.view.tpl.html"
            };
        });
})();