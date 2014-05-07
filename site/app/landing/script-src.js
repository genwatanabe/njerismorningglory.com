var landingModule = angular.module('app.landing', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

landingModule.factory('LandingCarouselService', ['$resource', function($resource) {
  return $resource('app/landing/data/carousel-ad.json'+'?_=' + Math.random());
}]);

landingModule.controller('LandingCtrl', ['$scope', '$routeParams', 'GlobalData', 'LandingCarouselService', function($scope, $routeParams, GlobalData, LandingCarouselService) {
  $scope.gData = GlobalData;
  $scope.myInterval = 5000;

  setTimeout(function(){
    $scope.isNjeriConcept = 1;
  },100);

  LandingCarouselService.query(function(data){
    $scope.slides = data;
  });
}]);
