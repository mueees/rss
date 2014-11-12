(function () {
    "use strict";

    angular.module('app.rss.tags')
        .directive('tagManager', function () {

            function link(scope, element, attrs){

            }

            function controller($scope){
                this.removeTag = function (idTag) {
                    $scope.tags = _.without($scope.tags, _.findWhere($scope.tags, {_id: idTag}));
                };

                this.addTag = function (tag) {
                    $scope.tags.push({
                        _id: tag._id,
                        name: tag.name
                    });
                };
            }

            return {
                restrict: "E",
                scope: {
                    postId: "=postId",
                    tags: "=tags"
                },
                replace: true,
                link: link,
                controller: controller,
                templateUrl: 'rss/tags/tagManager/tagManager.view.tpl.html'
            };
        });
})();
