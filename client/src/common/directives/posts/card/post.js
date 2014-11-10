angular.module('directives.posts.card', [])
    .directive('postCard', [function () {
        return {
            restrict: "E",
            scope: {
                post: '='
            },
            replace: true,
            templateUrl: "directives/posts/card/post.tpl.html",
            link: function (scope, element, attrs) {

            }
        };
    }]);