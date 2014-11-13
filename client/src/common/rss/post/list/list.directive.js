(function () {
    "use strict";

    angular.module('app.rss.post')
        .directive('postList', function (PostModel) {
            return {
                restrict: "E",
                require: "^posts",
                templateUrl: "rss/post/list/list.view.tpl.html",
                replace: true,
                scope: {
                    post: "=",
                    type: "@"
                },
                link: function (scope, element, attrs, postsCtrl) {

                    scope.isShowBody = false;
                    postsCtrl.addPost(scope);
                    scope.choosePost = function () {
                        postsCtrl.hideAllBody(scope);
                        scope.isShowBody = !scope.isShowBody;

                        if(!scope.post.isRead && scope.type != 'guest'){
                            PostModel.markAsRead(scope.post._id).then(function () {
                                scope.post.isRead = true;
                            });
                        }

                    };
                    scope.keepUnread = function ($event) {
                        $event.preventDefault();
                        PostModel.markAsUnRead(scope.post._id).then(function () {
                            scope.post.isRead = false;
                        });
                        postsCtrl.hideAllBody(scope);
                        scope.isShowBody = !scope.isShowBody;
                    };
                }
            };
        });
})();