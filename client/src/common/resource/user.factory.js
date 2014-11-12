(function () {
    'use strict';

    angular.module('app.resource.user', [])
        .factory('UserModel', function (Restangular) {
            var config = {
                name: 'user'
            };

            return {
                login: function (email, pass) {
                    return Restangular.one(config.name).customPOST({
                        email: email,
                        pass: pass
                    }, 'login');
                },
                logout: function (email, pass) {
                    return Restangular.one(config.name).customPOST({}, 'logout');
                },
                register: function (email, pass) {
                    return Restangular.one(config.name).customPOST({
                        email: email,
                        pass: pass
                    }, 'register');
                }
            };
        });
})();