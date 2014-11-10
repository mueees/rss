angular.module('templates-common', ['directives/menuCategory/menuCategory.tpl.html']);

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
