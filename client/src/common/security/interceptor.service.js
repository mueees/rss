(function () {
    "use strict";

    angular.module('app.security')
        .run(function (Restangular, Security, $state) {
            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                if(response.status === 403) {
                    Security.currentUser = null;
                    $state.go('landing');
                    return false;
                }
            });
        });
})();
