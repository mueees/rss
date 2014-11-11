(function () {
    "use strict";

    angular.module('directives.posts.list', [])
        .directive('postList', function (PostModel) {
            return {
                restrict: "E",
                require: "^posts",
                templateUrl: "directives/posts/list/post.tpl.html",
                replace: true,
                scope: {
                    post: "="
                },
                link: function (scope, element, attrs, postsCtrl) {
                    scope.isShowBody = false;
                    postsCtrl.addPost(scope);

                    scope.choosePost = function () {
                        postsCtrl.hideAllBody(scope);

                        if(!scope.post.isRead){
                            PostModel.markAsRead(scope.post._id).then(function () {
                                scope.post.isRead = true;
                            });
                        }

                        scope.isShowBody = !scope.isShowBody;
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