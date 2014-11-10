angular.module('app.feed', [])
    .controller('FeedCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.data.typeViewPost = 'list';
    }]);