(function () {
    "use strict";

    angular.module('app.search')
        .controller("SearchController", function ($scope, FeedModel) {
            $scope.data = {
                feed: null,
                typeViewPost: 'list',
                clearSearch: function () {
                    $scope.data.feed = null;
                },
                chooseFeed: function (feed) {
                    $scope.data.feed = feed;
                    $scope.data.isShowPreload = true;
                    $scope.data.errorGetPosts = false;

                    if( $scope.data.feed._id ){
                        FeedModel.getPostsById($scope.data.feed._id).then(function (response) {
                            $scope.data.feed.posts = response.data.posts;
                            $scope.data.isShowPreload = false;
                            $scope.data.errorGetPosts = false;
                        }, function () {
                            $scope.data.errorGetPosts = response.data.error;
                        });
                    }else if( $scope.data.feed.url ){
                        FeedModel.getPostsByUrl($scope.data.feed.url).then(function (response) {
                            $scope.data.feed.posts = response.data.posts;
                            $scope.data.isShowPreload = false;
                            $scope.data.errorGetPosts = false;
                        }, function (response) {
                            $scope.data.errorGetPosts = response.data.error;
                        });
                    }
                },
                errorGetPosts: false,
                isShowPreload: false
            };
        });
})();
