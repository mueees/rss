(function () {
    "use strict";

    angular.module('app.resource.feed', [])
        .factory('FeedModel', ['Restangular', function (Restangular) {
            var config = {
                name: 'feed',
                defaultFields: {
                    from: 10,
                    to: 10,
                    count: 10
                }
            };

            Restangular.extendModel(config.name, function(model) {
                angular.extend(model, config.defaultFields);
                model.getMorePosts = function() {
                    var _this = this;

                    this.from = angular.copy(this.to);
                    this.to = this.to + this.count;

                    return this.one('posts').customGET(_this.from +'/'+_this.to).then(function (posts) {
                        angular.forEach(posts, function (post) {
                            _this.posts.push(post);
                        });
                    });
                };

                return model;
            });

            return {
                getById: function(_id){
                    return Restangular.one(config.name, _id).get();
                }
            };
        }]);

})();
