angular.module('app.directives', [
]);

function createDirective(name){
    return function(){
        return {
            restrict: 'E',
            compile: function(tElem, tAttrs){
                console.log(name + ': compile => ' + tElem.html());
                return {
                    pre: function(scope, iElem, iAttrs){
                        console.log(name + ': pre link => ' + iElem.html());
                    },
                    post: function(scope, iElem, iAttrs){
                        console.log(name + ': post link => ' + iElem.html());
                    }
                };
            }
        };
    };
}

var d = angular.module('app.directives');

d.directive('levelOne', createDirective('levelOne'));
d.directive('levelTwo', createDirective('levelTwo'));
d.directive('levelThree', createDirective('levelThree'));