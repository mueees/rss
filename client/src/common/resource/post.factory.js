(function () {
    "use strict";

    angular.module('app.resource.post', [])
        .factory('PostModel', ['Restangular', function (Restangular) {
            var config = {
                name: 'post'
            };

            var Post = Restangular.service(config.name);

            return {
                markAsRead: function (_id) {
                    return Restangular.one(config.name, _id).customPOST({}, 'markasread');
                },
                markAsUnRead: function (_id) {
                    return Restangular.one(config.name, _id).customPOST({}, 'markasunread');
                },
                removeTag: function (postId, tagId) {
                    return Restangular.one(config.name).customPOST({
                        postId: postId,
                        tagId: tagId
                    }, 'tag/remove');
                }
            };
        }]);
})();
