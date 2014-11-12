(function () {
    "use strict";

    angular.module('app.rss.tags')
        .directive('tag', function (PostModel) {
            function link(scope, element, attrs, tagManagerCtrl){
                scope.clickHandler = function () {
                    PostModel.removeTag(scope.postId, scope.tag._id).then(function () {
                        tagManagerCtrl.removeTag(scope.tag._id);
                    });
                };
            }

            return {
                restrict: "E",
                require: "^tagManager",
                scope: {
                    postId: "=postId",
                    tag: "=tag"
                },
                replace: true,
                link: link,
                templateUrl: 'rss/tags/tag/tag.view.tpl.html'
            };
        });
})();
