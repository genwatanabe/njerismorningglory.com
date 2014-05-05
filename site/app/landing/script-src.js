var landingModule = angular.module('app.landing', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

landingModule.controller('LandingCtrl', ['$scope', '$routeParams', 'GlobalData', function($scope, $routeParams, GlobalData) {
  $scope.gData = GlobalData;

  $scope.model = {
    message: ""
  };
}]);

landingModule.factory('LandingCarouselService', ['$resource', function($resource) {
  return $resource('app/landing/data/carousel-ad.json'+'?_=' + Math.random());
}]);

landingModule.controller('LandingCarouselCtrl', ['$scope', 'LandingCarouselService', function($scope, LandingCarouselService) {
  $scope.myInterval = 5000;

  LandingCarouselService.query(function(data){
    $scope.slides = data;
  });

}]);
