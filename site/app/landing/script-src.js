var landingModule = angular.module('app.landing', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

landingModule.factory('LandingCarouselService', ['$resource', function($resource) {
  return $resource('app/landing/data/carousel-ad.json'+'?_=' + Math.random());
}]);

landingModule.controller('LandingCtrl',
  ['$scope', '$http', '$routeParams', 'AppService', 'LandingCarouselService',
  function($scope, $http, $routeParams, AppService, LandingCarouselService) {
  
    // Load background image for the current screen size.
    AppService.loadBackImg($http, 'app/landing/data/back-img.json');

    $scope.myInterval = 5000;
    
    LandingCarouselService.query(function(data){
      $scope.slides = data;
    });

}]);
