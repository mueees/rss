angular.module('templates-common', ['menu/menu-category/menu-category.view.tpl.html', 'rss/add-category/add-category.view.tpl.html', 'rss/add-feed/add-feed.view.tpl.html', 'rss/post/card/card.view.tpl.html', 'rss/post/list/list.view.tpl.html', 'rss/post/posts/posts.view.tpl.html', 'rss/search/search/search.view.tpl.html', 'rss/tags/tag/tag.view.tpl.html', 'rss/tags/tagManager/tagManager.view.tpl.html', 'security/sign/sign.view.tpl.html']);

angular.module("menu/menu-category/menu-category.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu/menu-category/menu-category.view.tpl.html",
    "<nav class=\"menu\">\n" +
    "    <ul>\n" +
    "        <li ng-class=\"{open: isOpen, feedActive: isFeedActive(category)}\" class=\"category\" ng-repeat=\"category in categories\" category-item>\n" +
    "            <span class=\"category-title\" ng-click=\"categoryClick()\">\n" +
    "                <i class=\"icon-angle-right pull-right icon-toggle\" ng-class=\"{active: !isOpen}\"></i>\n" +
    "                <i class=\"icon-angle-down pull-right icon-toggle\" ng-class=\"{active: isOpen}\"></i>\n" +
    "                {{category.name}}\n" +
    "            </span>\n" +
    "            <ul class=\"feeds\" ng-show=\"category.feeds.length\">\n" +
    "                <li ng-click=\"feedClick(feed._id)\" ng-class=\"{active: isActive(feed._id)}\" class=\"feed\" ng-repeat=\"feed in category.feeds\" >\n" +
    "                    <a href=\"#/rss/feed/{{feed._id}}\">\n" +
    "                        {{feed.name}}\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</nav>");
}]);

angular.module("rss/add-category/add-category.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/add-category/add-category.view.tpl.html",
    "<div class=\"add-category\">\n" +
    "    <div class=\"input-group\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "        <button ng-disabled=\"!category.name\" class=\"btn btn-success\" type=\"button\" ng-click=\"addCategory()\">+</button>\n" +
    "      </span>\n" +
    "        <input type=\"text\" class=\"form-control\" ng-model=\"category.name\" placeholder=\"Add category\">\n" +
    "        <div ng-if=\"isShowClose\" class=\"close-btn\" ng-click=\"close()\"><i class=\"icon-cancel\"></i></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("rss/add-feed/add-feed.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/add-feed/add-feed.view.tpl.html",
    "<div class=\"add-feed\">\n" +
    "    <div class=\"add-feed-content\"  ng-if=\"!showForm\">\n" +
    "        <button class=\"btn btn-success\" ng-click=\"addCategory()\">Add feed</button>\n" +
    "        <span ng-if=\"showFormPreloader\" class=\"spin spin-right icon-spin5\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content\" ng-if=\"showForm\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"data.name\" placeholder=\"Feed name\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <p>Choose categories:</p>\n" +
    "            <ul>\n" +
    "                <li ng-repeat=\"category in categories\">\n" +
    "                    <label>\n" +
    "                        <input name=\"categories[]\" ng-model=\"category.selected\" type=\"checkbox\" /> {{category.name}}\n" +
    "                    </label>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <add-category category-create=\"categoryCreate\"></add-category>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group button-group\">\n" +
    "            <span ng-if=\"showFormPreloader\" class=\"spin spin-left icon-spin5\"></span>\n" +
    "            <button class=\"btn btn-success\" ng-click=\"addFeed()\" ng-disabled=\"!data.name || !data.categories.length\" >Add feed</button>\n" +
    "            <button class=\"btn btn-link\" ng-click=\"cancel()\">Cancel</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("rss/post/card/card.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/post/card/card.view.tpl.html",
    "<li class=\"rss-post card \">\n" +
    "    THIS IS CARD\n" +
    "    <div class=\"content\">\n" +
    "        <i class=\"icon-bookmark-empty\"></i>\n" +
    "        <span class=\"title\">25 живописных городов, которые становятся еще прекраснее с приходом зимы25 живописных городов, которые становятся еще прекраснее с приходом зимы</span>\n" +
    "    </div>\n" +
    "    <span class=\"time\">2h 35m</span>\n" +
    "</li>");
}]);

angular.module("rss/post/list/list.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/post/list/list.view.tpl.html",
    "<li class=\"rss-post line\"  ng-class=\"{unread: !post.isRead}\">\n" +
    "    <div  ng-if=\"!isShowBody\" class=\"preview\">\n" +
    "        <div class=\"content\">\n" +
    "            <i class=\"icon-bookmark-empty\" ng-if=\"type != 'guest'\"></i>\n" +
    "            <span class=\"title\" ng-click=\"choosePost()\">{{post.title}}</span>\n" +
    "        </div>\n" +
    "        <span class=\"time\">{{post.time}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"isShowBody\" class=\"body\">\n" +
    "        <article>\n" +
    "            <header>\n" +
    "                <h1>{{post.title}}</h1>\n" +
    "                <div class=\"post-menu\" ng-if=\"type != 'guest'\">\n" +
    "                    <div class=\"post-item\">\n" +
    "                        <a class=\"lk-effect-1 menu-link\" href=\"#\" ng-click=\"keepUnread($event)\">keep unread</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"post-item\">\n" +
    "                        <tag-manager post-id=\"post._id\" tags=\"post.tags\"></tag-manager>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </header>\n" +
    "        </article>\n" +
    "        {{post.body}}\n" +
    "    </div>\n" +
    "</li>");
}]);

angular.module("rss/post/posts/posts.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/post/posts/posts.view.tpl.html",
    "<ul ng-transclude>\n" +
    "\n" +
    "</ul>");
}]);

angular.module("rss/search/search/search.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/search/search/search.view.tpl.html",
    "<div class=\"search-feed\">\n" +
    "    <form name=\"SearchFeed\">\n" +
    "        <div class=\"form-group search-input\">\n" +
    "            <input ng-keyup=\"keyUp()\" ng-model=\"data.search\" type=\"text\" name=\"search\" id=\"search\" class=\"form-control\" placeholder=\"Feed url\" />\n" +
    "            <div class=\"close-btn\" ng-click=\"resetSearch()\" ng-if=\"data.search\"><i class=\"icon-cancel\"></i></div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"feeds-result\">\n" +
    "        <div ng-if=\"(!data.feeds.newFeeds && !data.feeds.exists) && !data.isShowPreloader && !data.error\">No feeds</div>\n" +
    "        <div ng-if=\"data.isShowPreloader\">Try to find feeds</div>\n" +
    "        <div ng-if=\"data.error\">{{data.error}}</div>\n" +
    "        <div ng-if=\"data.feeds.newFeeds\">\n" +
    "            <ul class=\"feeds-list list\">\n" +
    "                <li ng-repeat=\"feed in data.feeds.newFeeds\" ng-click=\"chooseFeed(feed)\">\n" +
    "                    {{feed._id}}\n" +
    "                    {{feed.name}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <br/>\n" +
    "        <div ng-if=\"data.feeds.exists\">\n" +
    "            <ul class=\"feeds-list list\">\n" +
    "                <li ng-repeat=\"feed in data.feeds.exists\" ng-click=\"chooseFeed(feed)\">\n" +
    "                    {{feed._id}}\n" +
    "                    {{feed.name}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("rss/tags/tag/tag.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/tags/tag/tag.view.tpl.html",
    "<button ng-click=\"clickHandler()\" class=\"btn btn-xs btn-primary tag\">{{tag.name}} <i class=\"icon-cancel\"></i></button>");
}]);

angular.module("rss/tags/tagManager/tagManager.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("rss/tags/tagManager/tagManager.view.tpl.html",
    "<div class=\"tag-manager\">\n" +
    "\n" +
    "    <div class=\"add-tag\">\n" +
    "        <i class=\"icon-tags\"></i>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tags-list\">\n" +
    "        <tag ng-repeat=\"tag in tags\" post-id=\"postId\" tag=\"tag\" ></tag>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("security/sign/sign.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/sign/sign.view.tpl.html",
    "<form name=\"SignForm\">\n" +
    "\n" +
    "    <div class=\"form-group\" show-error>\n" +
    "        <label class=\"control-label\" for=\"email\">Email</label>\n" +
    "        <input ng-model=\"user.email\" type=\"email\" ng-model=\"user.email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" show-error>\n" +
    "        <label class=\"control-label\" for=\"pass\">Password</label>\n" +
    "        <input ng-minlength=\"6\" ng-model=\"user.pass\" type=\"password\" ng-model=\"user.pass\" id=\"pass\" name=\"pass\" class=\"form-control\" placeholder=\"Password\" required>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"authError\">\n" +
    "        {{authError}}\n" +
    "    </div>\n" +
    "    <div ng-if=\"message\">\n" +
    "        {{message}}\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "        <button ng-click=\"login()\" type=\"button\" class=\"btn btn-primary\" ng-disabled=\"SignForm.$invalid || disableBtn\">Login</button>\n" +
    "        <button ng-click=\"register()\" type=\"button\" class=\"btn btn-success\" ng-disabled=\"SignForm.$invalid || disableBtn\">Register</button>\n" +
    "        <button ng-click=\"reset()\" type=\"button\" class=\"btn btn-link\" ng-disabled=\"disableBtn\">Reset</button>\n" +
    "    </div>\n" +
    "\n" +
    "</form>");
}]);
