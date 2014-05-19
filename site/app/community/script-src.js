var communityModule = angular.module('app.community', [
  'ngRoute',
  'ui.bootstrap'
]);

communityModule.directive('communityDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$location', '$http', 'AppService', function($scope, $rootScope, $location, $http, AppService) {

            // Load background image for the current screen size.
            AppService.loadBackImg($http, 'app/programs/data/back-img.json');

            $scope.openPage = function(path) {
                document.location = path;
            };

            $scope.tab = {};
            $scope.tab.isActActive      = false;
            $scope.tab.isLinksActive    = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/community/activities':
                    $scope.tab.isActActive      = true;
                    break;
                case '/community/links':
                    $scope.tab.isLinksActive    = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-community";
        }],
        transclude: true,
        templateUrl: 'app/community/_template.html',
        replace:true
    }
});
