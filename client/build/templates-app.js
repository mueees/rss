angular.module('templates-app', ['feed/list/feed.tpl.html', 'home/home.tpl.html', 'landing/landing.tpl.html', 'search/search.tpl.html']);

angular.module("feed/list/feed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("feed/list/feed.tpl.html",
    "<div ng-controller=\"FeedController\">\n" +
    "    <div class=\"rss-list type-line\">\n" +
    "        <div class=\"rss-title\">{{data.feed.name}}</div>\n" +
    "        <div ng-switch on=\"data.typeViewPost\">\n" +
    "            <div ng-switch-when=\"list\">\n" +
    "                <posts infinite-scroll=\"getMorePosts()\" >\n" +
    "                    <post-list post=\"post\" ng-repeat=\"post in data.feed.posts\"></post-list>\n" +
    "                </posts>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-sm-3  \">\n" +
    "            <div class=\"menu-container\">\n" +
    "                <nav class=\"menu\">\n" +
    "                    <ul>\n" +
    "                        <li>\n" +
    "                            <a href=\"#/rss\">\n" +
    "                                <i class=\"icon-bookmark-empty\"></i>\n" +
    "                                <span>Home</span>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            <a href=\"#/rss/search\">\n" +
    "                                <span>Search</span>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </nav>\n" +
    "                <div class=\"menu-separator\"></div>\n" +
    "                <menu-category></menu-category>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12 col-sm-9 content-container\">\n" +
    "            <ui-view></ui-view>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("landing/landing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("landing/landing.tpl.html",
    "<div class=\"container\" ng-controller=\"LandingController\">\n" +
    "    <h1>Rss service</h1>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <sign login-after=\"loginAfter\"></sign>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"row\" ng-controller=\"SearchController\">\n" +
    "    <div class=\"col-sm-3\">\n" +
    "        <search-feed choose-feed=\"data.chooseFeed\" clear-search=\"data.clearSearch\"></search-feed>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "\n" +
    "        <h1>{{data.feed.name}}</h1>\n" +
    "\n" +
    "        <add-feed ng-if=\"data.feed\" feed-id=\"data.feed._id\" feed-url=\"data.feed.url\"></add-feed>\n" +
    "\n" +
    "        <div ng-if=\"data.feed.description\" class=\"description\">{{data.feed.description}}</div>\n" +
    "\n" +
    "        <div ng-if=\"data.errorGetPosts\">{{data.errorGetPosts}}</div>\n" +
    "        <div ng-if=\"data.isShowPreload && !data.errorGetPosts\">loading posts</div>\n" +
    "\n" +
    "        <div ng-switch on=\"data.typeViewPost\">\n" +
    "            <div ng-switch-when=\"list\">\n" +
    "                <posts>\n" +
    "                    <post-list type=\"guest\" post=\"post\" ng-repeat=\"post in data.feed.posts\"></post-list>\n" +
    "                </posts>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);
