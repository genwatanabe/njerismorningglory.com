angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\">\n" +
    "  <daypicker ng-switch-when=\"day\"></daypicker>\n" +
    "  <monthpicker ng-switch-when=\"month\"></monthpicker>\n" +
    "  <yearpicker ng-switch-when=\"year\"></yearpicker>\n" +
    "</div>");
}]);
