(function () {
    "use strict";

    angular.module('app.services.pubsub', [])
        .factory('$PubSubFactory',['$rootScope', '$log', function ($rootScope, $log) {

            function PubSub(){
                this.publish = function(eventName, message) {
                    $log.info(eventName, message);
                    $rootScope.$broadcast(eventName, message);
                };
                this.subscribe = function(eventName, scope, handler, element) {
                    scope.$on(eventName, function(event, message) {
                        handler(message, scope, element);
                        if (!$rootScope.$$phase) {
                            $rootScope.$apply();
                        }
                    });
                };
            }

            return new PubSub();
        }]);
})();
