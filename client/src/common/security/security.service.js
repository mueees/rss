(function () {
    'use strict';

    angular.module('app.security')
        .factory('Security', function (UserModel, $q) {

            function login(email, password){
                var prom = UserModel.login(email, password);

                prom.then(function (user) {
                    service.currentUser = user;
                }, function () {
                    service.currentUser = null;
                });

                return prom;
            }
            function logout(){
                var prom = UserModel.logout();
                prom.then(function () {
                }, function () {
                });
                return prom;
            }
            function register(email, pass){
                return UserModel.register(email, pass);
            }

            var service = {
                login: login,
                logout: logout,
                register: register,
                currentUser: angular.copy(RSS.user),
                isAuthenticated: function(){
                    return !!service.currentUser;
                }
            };

            return service;
        });
})();