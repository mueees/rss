(function () {
    "use strict";

    angular.module('app.directives', [
        'app.directives.menuCategory',
        'directives.posts.list',
        'directives.posts.card',
        'app.directives.tagManager',
        'app.directives.tag',
        'directives.posts'
    ]);
})();