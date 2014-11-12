(function(){
    'use strict';
    
    angular.module('app.menu')
        .directive('categoryItem', function(){
            function link(scope){
                scope.isOpen = false;
                scope.categoryClick = function () {
                    scope.isOpen = !scope.isOpen;
                };
            }

            return {
                restrict: "A",
                link: link
            };
        });
})();