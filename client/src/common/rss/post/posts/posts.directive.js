(function () {
    "use strict";
    angular.module('app.rss.post')
        .directive('posts', function () {
            function controller(){
                this.posts = [];

                this.addPost = function (post) {
                    this.posts.push(post);
                };

                this.hideAllBody = function (scope) {
                    angular.forEach(this.posts, function (post) {
                        if(scope != post){
                            post.isShowBody = false;
                        }
                    });
                };
            }

            return {
                controller: controller,
                restrict: "E",
                replace: true,
                transclude: true,
                templateUrl: "rss/post/posts/posts.view.tpl.html"
            };
        });
})();
