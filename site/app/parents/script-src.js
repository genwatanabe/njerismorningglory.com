var parentsModule = angular.module('app.parents', [
  'ngRoute',
  'ui.bootstrap'
]);

parentsModule.controller('ParentsCtrl', ['$scope', '$routeParams', 'GlobalData', function($scope, $routeParams, GlobalData) {
    $scope.gData = GlobalData;
}]);

parentsModule.directive('parentsDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$http', 'AppService', function($scope, $rootScope, $http, AppService) {

            // Load background image for the current screen size.
            AppService.loadBackImg($http, 'app/about/data/back-img.json');

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-parents";
        }],
        transclude: true,
        templateUrl: 'app/parents/_template.html',
        replace:true
    }
});
