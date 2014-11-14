(function () {
    "use strict";

    angular.module('app.resource.category', [])
        .factory('CategoryModel', ['Restangular', function (Restangular) {
            var config = {
                name: 'category'
            };

            return {
                all: function(){
                    return Restangular.all(config.name).getList();
                },
                addCategory: function (name) {
                    return Restangular.one(config.name).customPOST({
                        name: name
                    }, 'add');
                },
                getCategories: function () {
                    return Restangular.one(config.name).customGET('getCategories');
                }
            };
        }]);
})();
