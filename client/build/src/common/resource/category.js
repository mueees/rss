angular.module('app.resource.category', [])
    .factory('CategoryModel', ['Restangular', function (Restangular) {
        var config = {
            name: 'category'
        };

        return {
            all: function(){
                return Restangular.all(config.name).getList();
            }
        };
    }]);