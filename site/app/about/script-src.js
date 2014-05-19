var aboutModule = angular.module('app.about', [
  'ngRoute',
  'ui.bootstrap'
]);

aboutModule.directive('aboutDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$location', '$http', 'AppService', function($scope, $rootScope, $location, $http, AppService) {

            // Load background image for the current screen size.
            AppService.loadBackImg($http, 'app/about/data/back-img.json');

            $scope.openPage = function(path) {
                document.location = path;
            };

            $scope.tab = {};
            $scope.tab.isSchoolActive   = false;
            $scope.tab.isTeachersActive = false;
            $scope.tab.isContactActive  = false;
            $scope.tab.isTourActive     = false;
            $scope.tab.isWaldorfActive  = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/about/school':
                    $scope.tab.isSchoolActive = true;
                    break;
                case '/about/teachers':
                    $scope.tab.isTeachersActive = true;
                    break;
                case '/about/contact':
                    $scope.tab.isContactActive = true;
                    break;
                case '/about/tour':
                    $scope.tab.isTourActive = true;
                    break;
                case '/about/waldorf':
                    $scope.tab.isWaldorfActive = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-about";
            $scope.nmgAboutThemeTextClass = "nmg-theme-text-about";
        }],
        transclude: true,
        templateUrl: 'app/about/_template.html',
        replace:true
    }
});

