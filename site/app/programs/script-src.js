var programsModule = angular.module('app.programs', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

programsModule.controller('ProgramsCtrl', ['$scope', '$routeParams', 'GlobalData', function($scope, $routeParams, GlobalData) {
    $scope.gData = GlobalData;
}]);

programsModule.directive('programsDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$location', '$element', 'GlobalData', function($scope, $rootScope, $location, $element, GlobalData) {
            $scope.gData = GlobalData;
            $scope.openPage = function(path) {
                document.location = path;
            };

            $scope.tab = {};
            $scope.tab.isHandsActive = false;
            $scope.tab.isSummerActive  = false;
            $scope.tab.isSpringActive   = false;
            $scope.tab.isSkiActive    = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/programs/hands-on-art':
                    $scope.tab.isHandsActive = true;
                    break;
                case '/programs/summer-art-camp':
                    $scope.tab.isSummerActive = true;
                    break;
                case '/programs/spring-art-camp':
                    $scope.tab.isSpringActive = true;
                    break;
                case '/programs/ski-week-art-camp':
                    $scope.tab.isSkiActive = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-programs";
        }],
        transclude: true,
        templateUrl: 'app/programs/_template.html',
        replace:true
    }
});

programsModule.factory('HOACarouselService', ['$resource', function($resource) {
  return $resource('app/programs/data/carousel-hoa.json'+'?_=' + Math.random());
}]);

programsModule.controller('HOACarouselCtrl', ['$scope', 'HOACarouselService', function($scope, HOACarouselService) {
  $scope.myInterval = 4000;

  HOACarouselService.query(function(data){
    $scope.slides = data;
  });

}]);
