(function () {
    "use strict";

    angular.module('app')
        .config(function (RestangularProvider) {
            RestangularProvider.setRestangularFields({
                id: "_id"
            });
        });
})();