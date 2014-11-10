angular.module('directives.posts.list', [])
    .directive('postList', [function () {
        return {
            restrict: "E",
            scope: {
                post: '='
            },
            replace: true,
            templateUrl: "directives/posts/list/post.tpl.html",
            link: function (scope, element, attrs) {

            }
        };
    }]);