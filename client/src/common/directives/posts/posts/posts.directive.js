(function () {
    "use strict";

    angular.module('directives.posts', [])
        .directive('posts', function () {
            function link(scope, element, attrs){

            }
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
                templateUrl: "directives/posts/posts/posts.directive.tpl.html",
                link: link
            };
        });
})();
