angular.module('directives.post', [])
    .directive('post', [function () {
        return {
            restrict: "E",
            scope: {
                post: '='
            },
            replace: true,
            templateUrl: "directives/post/post.tpl.html",
            link: function (scope, element, attrs) {

            }
        };
    }]);