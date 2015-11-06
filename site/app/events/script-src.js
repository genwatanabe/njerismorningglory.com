var eventsModule = angular.module('app.events', [
  'ngRoute',
  'ui.bootstrap'
]);

eventsModule.directive('eventsDirective', function() {
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
            $scope.tab.isUpcomingEventsActive = false;
            $scope.tab.isOpenHouseActive   = false;
            $scope.tab.isSpringFaireActive = false;
            $scope.tab.isMFJActive         = false;
            $scope.tab.isMAEActive         = false;
            $scope.tab.isAmahlActive       = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/events/upcoming':
                    $scope.tab.isUpcomingEventsActive = true;
                    break;
                case '/events/open-house':
                    $scope.tab.isOpenHouseActive = true;
                    break;
                case '/events/spring-faire':
                    $scope.tab.isSpringFaireActive = true;
                    break;
                case '/events/mfj':
                    $scope.tab.isMFJActive = true;
                    break;
                case '/events/mae':
                    $scope.tab.isMAEActive = true;
                    break;
                case '/events/amahl':
                    $scope.tab.isAmahlActive = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-default";
        }],
        transclude: true,
        templateUrl: 'app/events/_template.html?_=' + Math.random(),
        replace:true
    }
});

