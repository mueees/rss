angular.module('templates-app', ['feed/feed.tpl.html', 'home/home.tpl.html']);

angular.module("feed/feed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("feed/feed.tpl.html",
    "<feed-menu></feed-menu>\n" +
    "<feeds></feeds>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "This is home");
}]);
