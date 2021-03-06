var photogalleryModule = angular.module('app.photogallery', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);

photogalleryModule.controller('PhotogalleryCtrl', ['$scope', '$routeParams', 'GlobalData', function($scope, $routeParams, GlobalData) {
    $scope.gData = GlobalData;
}]);

photogalleryModule.directive('photogalleryDirective', function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        controller: ['$scope', '$rootScope', '$location', '$http', 'AppService', function($scope, $rootScope, $location, $http, AppService) {

            // Load background image for the current screen size.
            AppService.loadBackImg($http, 'app/photogallery/data/back-img.json');

            $scope.openPage = function(path) {
                document.location = path;
            };

            $scope.tab = {};
            $scope.tab.isActive1 = false;
            $scope.tab.isActive2 = false;
            $scope.tab.isActive3 = false;
            $scope.tab.isActive4 = false;
            $scope.tab.isActive5 = false;

            // Set the default active tab based on the url path.
            switch ($location.path()) {
                case '/photogallery/ancient-olympic':
                    $scope.tab.isActive1 = true;
                    break;
                case '/photogallery/spring-faire':
                    $scope.tab.isActive2 = true;
                    break;
                case '/photogallery/yosemitefaire':
                    $scope.tab.isActive3 = true;
                    break;
                case '/photogallery/china-town':
                    $scope.tab.isActive4 = true;
                    break;
                case '/photogallery/mae':
                    $scope.tab.isActive5 = true;
                    break;
            }

            // Change the header/footer area text style by the theme of the background.
            $rootScope.nmgThemeTextClass = "nmg-theme-text-photogallery";
        }],
        transclude: true,
        templateUrl: 'app/photogallery/_template.html',
        replace:true
    }
});

photogalleryModule.factory('AOCarouselService', ['$resource', function($resource) {
  return $resource('app/photogallery/data/carousel-ancient-olympic.json'+'?_=' + Math.random());
}]);
photogalleryModule.controller('AOCarouselCtrl', ['$scope', 'AOCarouselService', function($scope, AOCarouselService) {
  $scope.myInterval = 7000;

  AOCarouselService.query(function(data){
    $scope.slides = data;
  });
}]);

photogalleryModule.factory('SFCarouselService', ['$resource', function($resource) {
  return $resource('app/photogallery/data/carousel-spring-faire.json'+'?_=' + Math.random());
}]);
photogalleryModule.controller('SFCarouselCtrl', ['$scope', 'SFCarouselService', function($scope, SFCarouselService) {
  $scope.myInterval = 7000;

  SFCarouselService.query(function(data){
    $scope.slides = data;
  });
}]);

photogalleryModule.factory('YosemiteCarouselService', ['$resource', function($resource) {
  return $resource('app/photogallery/data/carousel-yosemite.json'+'?_=' + Math.random());
}]);
photogalleryModule.controller('YosemiteCarouselCtrl', ['$scope', 'YosemiteCarouselService', function($scope, YosemiteCarouselService) {
  $scope.myInterval = 7000;

  YosemiteCarouselService.query(function(data){
    $scope.slides = data;
  });
}]);

photogalleryModule.factory('YosemitePhotoService', ['$resource', function($resource) {
  return $resource('app/photogallery/data/photo-yosemite.json'+'?_=' + Math.random());
}]);
photogalleryModule.controller('YosemitePhotoCtrl', ['$scope', 'YosemitePhotoService', function($scope, YosemitePhotoService) {
  $scope.myInterval = 7000;

  YosemitePhotoService.query(function(data){
    $scope.slides = data;
  });
}]);

photogalleryModule.factory('MAECarouselService', ['$resource', function($resource) {
  return $resource('app/photogallery/data/carousel-mae.json'+'?_=' + Math.random());
}]);
photogalleryModule.controller('MAECarouselCtrl', ['$scope', 'MAECarouselService', function($scope, MAECarouselService) {
  $scope.myInterval = 7000;

  MAECarouselService.query(function(data){
    $scope.slides = data;
  });
}]);
