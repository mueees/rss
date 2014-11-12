(function () {
    "use strict";

    angular.module('app.rss.post')
        .directive('postCard', [function () {
            return {
                restrict: "E",
                scope: {
                    post: '='
                },
                replace: true,
                templateUrl: "rss/post/card/card.view.tpl.html",
                link: function (scope, element, attrs) {

                }
            };
        }]);
})();