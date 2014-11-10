angular.module('templates-common', ['directives/menuCategory/menuCategory.tpl.html', 'directives/post/post.tpl.html', 'directives/posts/card/post.tpl.html', 'directives/posts/list/post.tpl.html']);

angular.module("directives/menuCategory/menuCategory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/menuCategory/menuCategory.tpl.html",
    "<nav class=\"menu\">\n" +
    "    <ul>\n" +
    "        <li ng-class=\"{open: isOpen, feedActive: isFeedActive(category)}\" class=\"category\" ng-repeat=\"category in categories\" category-item>\n" +
    "            <a href=\"#\" ng-click=\"categoryClick()\">\n" +
    "                <i class=\"icon-angle-right pull-right icon-toggle\" ng-class=\"{active: !isOpen}\"></i>\n" +
    "                <i class=\"icon-angle-down pull-right icon-toggle\" ng-class=\"{active: isOpen}\"></i>\n" +
    "                {{category.name}}\n" +
    "            </a>\n" +
    "            <ul class=\"feeds\" ng-show=\"category.feeds.length\">\n" +
    "                <li ng-click=\"feedClick(feed._id)\" ng-class=\"{active: isActive(feed._id)}\" class=\"feed\" ng-repeat=\"feed in category.feeds\" >\n" +
    "                    <a href=\"#/feed/{{feed._id}}\">\n" +
    "                        {{feed.name}}\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</nav>");
}]);

angular.module("directives/post/post.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/post/post.tpl.html",
    "<li class=\"rss-post line \">\n" +
    "    <div class=\"content\">\n" +
    "        <i class=\"icon-bookmark-empty\"></i>\n" +
    "        <span class=\"title\">25 живописных городов, которые становятся еще прекраснее с приходом зимы25 живописных городов, которые становятся еще прекраснее с приходом зимы</span>\n" +
    "    </div>\n" +
    "    <span class=\"time\">2h 35m</span>\n" +
    "</li>");
}]);

angular.module("directives/posts/card/post.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/posts/card/post.tpl.html",
    "<li class=\"rss-post card \">\n" +
    "    THIS IS CARD\n" +
    "    <div class=\"content\">\n" +
    "        <i class=\"icon-bookmark-empty\"></i>\n" +
    "        <span class=\"title\">25 живописных городов, которые становятся еще прекраснее с приходом зимы25 живописных городов, которые становятся еще прекраснее с приходом зимы</span>\n" +
    "    </div>\n" +
    "    <span class=\"time\">2h 35m</span>\n" +
    "</li>");
}]);

angular.module("directives/posts/list/post.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/posts/list/post.tpl.html",
    "<li class=\"rss-post line \">\n" +
    "    <div class=\"content\">\n" +
    "        <i class=\"icon-bookmark-empty\"></i>\n" +
    "        <span class=\"title\">25 живописных городов, которые становятся еще прекраснее с приходом зимы25 живописных городов, которые становятся еще прекраснее с приходом зимы</span>\n" +
    "    </div>\n" +
    "    <span class=\"time\">2h 35m</span>\n" +
    "</li>");
}]);
