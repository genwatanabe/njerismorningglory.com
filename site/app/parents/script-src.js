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
        controller: ['$scope', '$element', 'GlobalData', function($scope, $element, GlobalData) {
            $scope.gData = GlobalData;
        }],
        transclude: true,
        templateUrl: 'app/parents/_template.html',
        replace:true
    }
});
