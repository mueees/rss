(function () {
    'use strict';
    angular.module('app.feed')
        .controller('FeedController', function ($scope, $window) {
            $scope.data.typeViewPost = 'list';
            
            $scope.getMorePosts = function () {
                //$scope.data.feed.getMorePosts();
            };
        });
})();