var curriculumModule = angular.module('app.curriculum', [
  'ngRoute',
  'ui.bootstrap'
]);

curriculumModule.directive('curriculumDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$location', '$http', 'AppService', function($scope, $rootScope, $location, $http, AppService) {

            // Load background image for the current screen size.
            AppService.loadBackImg($http, 'app/curriculum/data/back-img.json');

            $scope.openPage = function(path) {
                document.location = path;
            };

            $scope.tab = {};
            $scope.tab.isOverviewActive = false;
            $scope.tab.isArtProgActive  = false;
            $scope.tab.isKinderActive   = false;
            $scope.tab.isFirstActive    = false;
            $scope.tab.isSecondActive   = false;
            $scope.tab.isThirdActive    = false;
            $scope.tab.isFourthActive   = false;
            $scope.tab.isFifthActive    = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/curriculum/overview':
                    $scope.tab.isOverviewActive = true;
                    break;
                case '/curriculum/art-programs':
                    $scope.tab.isArtProgActive = true;
                    break;
                case '/curriculum/kindergarten':
                    $scope.tab.isKinderActive = true;
                    break;
                case '/curriculum/1st-grade':
                    $scope.tab.isFirstActive = true;
                    break;
                case '/curriculum/2nd-grade':
                    $scope.tab.isSecondActive = true;
                    break;
                case '/curriculum/3rd-grade':
                    $scope.tab.isThirdActive = true;
                    break;
                case '/curriculum/4th-grade':
                    $scope.tab.isFourthActive = true;
                    break;
                case '/curriculum/5th-grade':
                    $scope.tab.isFifthActive = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-curriculum";
        }],
        transclude: true,
        templateUrl: 'app/curriculum/_template.html',
        replace:true
    }
});
