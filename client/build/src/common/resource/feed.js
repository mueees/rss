angular.module('app.resource.feed', [])
    .factory('FeedModel', ['Restangular', function (Restangular) {
        var config = {
            name: 'feed'
        };

        return {
            getById: function(_id){
                return Restangular.one(config.name, _id).get();
            }
        };
    }]);