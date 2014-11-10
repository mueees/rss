angular.module('templates-app', ['feed/feed.tpl.html', 'home/home.tpl.html']);

angular.module("feed/feed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("feed/feed.tpl.html",
    "<div ng-controller=\"FeedCtrl\">\n" +
    "    <!--<ul class=\"feed-menu\">\n" +
    "        <li>reload</li>\n" +
    "        <li>settings</li>\n" +
    "    </ul>-->\n" +
    "\n" +
    "    <div class=\"rss-list type-line\">\n" +
    "        <div class=\"rss-title\">{{data.feed.name}}</div>\n" +
    "        <ul ng-switch on=\"data.typeViewPost\">\n" +
    "            <post-list post=\"post\" ng-switch-when=\"list\" ng-repeat=\"post in data.feed.posts\"></post-list>\n" +
    "            <post-card post=\"post\" ng-switch-when=\"card\" ng-repeat=\"post in data.feed.posts\"></post-card>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "This is home");
}]);
