'use strict';

// Declare app level module which depends on routers and bootstrap, etc.
var app = angular.module('app', [
  'ngResource',
  'ngRoute',
  'ui.bootstrap',
  'app.landing',
  'app.about',
  'app.curriculum',
  'app.parents',
  'app.programs',
  'app.community',
  'app.events'
]);

// Routes configuration
app.config(['$routeProvider','$logProvider', function($routeProvider, $logProvider) {
  $logProvider.debugEnabled(true);

  $routeProvider
    .when('/', {
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingCtrl'

      // run before templateUrl/controller run.
      /*
      resolve: {
        app: function($q,$timeout) {
          var defer = $q.defer();
          $timeout(function() {
            defer.resolve(); // resolve() or reject()
          },2000); // delay 2 seconds to render template.
          return defer.promise;
        }
      }
      */
    })
    
    .when('/about', {
      templateUrl: 'app/about/school.html',
      controller: 'AboutCtrl',
    })
    .when('/about/school', {
      templateUrl: 'app/about/school.html',
      controller: 'AboutCtrl',
    })
    .when('/about/teachers', {
      templateUrl: 'app/about/teachers.html',
      controller: 'AboutCtrl'
    })
    .when('/about/contact', {
      templateUrl: 'app/about/contact.html',
      controller: 'AboutCtrl'
    })
    .when('/about/tour', {
      templateUrl: 'app/about/tour.html',
      controller: 'AboutCtrl'
    })
    .when('/about/waldorf', {
      templateUrl: 'app/about/waldorf.html',
      controller: 'AboutCtrl'
    })

    .when('/curriculum', {
      templateUrl: 'app/curriculum/overview.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/overview', {
      templateUrl: 'app/curriculum/overview.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/art-programs', {
      templateUrl: 'app/curriculum/art-programs.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/kindergarten', {
      templateUrl: 'app/curriculum/kindergarten.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/1st-grade', {
      templateUrl: 'app/curriculum/1st-grade.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/2nd-grade', {
      templateUrl: 'app/curriculum/2nd-grade.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/3rd-grade', {
      templateUrl: 'app/curriculum/3rd-grade.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/4th-grade', {
      templateUrl: 'app/curriculum/4th-grade.html',
      controller: 'CurriculumCtrl'
    })
    .when('/curriculum/5th-grade', {
      templateUrl: 'app/curriculum/5th-grade.html',
      controller: 'CurriculumCtrl'
    })

    .when('/programs', {
      templateUrl: 'app/programs/hands-on-art.html',
      controller: 'ProgramsCtrl'
    })
    .when('/programs/hands-on-art', {
      templateUrl: 'app/programs/hands-on-art.html',
      controller: 'ProgramsCtrl'
    })
    .when('/programs/summer-art-camp', {
      templateUrl: 'app/programs/summer-art-camp.html',
      controller: 'ProgramsCtrl'
    })
    .when('/programs/spring-art-camp', {
      templateUrl: 'app/programs/spring-art-camp.html',
      controller: 'ProgramsCtrl'
    })
    .when('/programs/ski-week-art-camp', {
      templateUrl: 'app/programs/ski-week-art-camp.html',
      controller: 'ProgramsCtrl'
    })

    .when('/parents/calendar', {
      templateUrl: 'app/parents/calendar.html',
      controller: 'ParentsCtrl'
    })
    .when('/parents/handbook', {
      templateUrl: 'app/parents/handbook.html',
      controller: 'ParentsCtrl'
    })

    .when('/community/activities', {
      templateUrl: 'app/community/activities.html',
      controller: 'CommunityCtrl'
    })
    .when('/community/links', {
      templateUrl: 'app/community/links.html',
      controller: 'CommunityCtrl'
    })

    .when('/events/open-house', {
      templateUrl: 'app/events/open-house.html',
      controller: 'EventsCtrl'
    })
    .when('/events/spring-faire', {
      templateUrl: 'app/events/spring-faire.html',
      controller: 'EventsCtrl'
    })
    .when('/events/mfj', {
      templateUrl: 'app/events/mfj.html',
      controller: 'EventsCtrl'
    })
    .when('/events/amahl', {
      templateUrl: 'app/events/amahl.html',
      controller: 'EventsCtrl'
    })

  	.otherwise({
  		redirectTo: '/'
  	});
}]);

// Execute immediately.
app.run(function($rootScope, $templateCache, $log) {
  console.log('app.run is running...');

  // always automatically clear the cache whenever the ng-view content changes.
  // see: http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
  $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
  });

  // Make $log accessible anywhere in html
  $rootScope.$log = $log;

});


// AppCtrl is always called before template/controller starts.
app.controller("AppCtrl", ['$scope', '$rootScope', '$route', '$location', '$http', function($scope, $rootScope, $route, $location, $http) {
    
  // This event fires BEFORE the routing starts.
  $rootScope.$on("$routeChangeStart", function(event, current, previous, resolve) {
      
      // Hide the navigation if it's visible.
      $scope.isMenuVisible  = false;

      //console.log("AppCtrl:$routeChangeStart", $scope, $rootScope, $route, $location);
  });

  // This event fires WHEN the routing fails (or when reject() is called).
  $rootScope.$on("$routeChangeError", function(event, current, previous, resolve) {
      //console.log("AppCtrl:$routeChangeError", $scope, $rootScope, $route, $location);
  });

  // This event fires AFTER the routing succeeded.
  $rootScope.$on("$routeChangeSuccess", function(event, current, previous, resolve) {
      //console.log("AppCtrl:$routeChangeSuccess", $scope, $rootScope, $route, $location);
      
      // Change the header/footer area text style by the theme of the background.
      $rootScope.nmgThemeTextClass = "nmg-theme-text-default";
  });

  // Initialize menu visibility. Hide by default.
  $scope.isMenuVisible = false;
  $scope.isLogInVisible = false;

  // Menu Button click handler
  $scope.menuButtonClick = function(event) {
    $scope.$log.debug(event);
    $scope.isMenuVisible = !$scope.isMenuVisible;
     console.log('$scope.isMenuVisible = '+$scope.isMenuVisible);
  };

  // Log In Button click handler
  $scope.loginButtonClick = function(event) {
    $scope.isLogInVisible = !$scope.isLogInVisible;
     console.log('$scope.isLogInVisible = '+$scope.isLogInVisible);
  };

}]);

// Defining the global variables.
app.factory('GlobalData', function(){
  return {
    'defaultTheme': 'spring'
  }
});

// Background image attribute directive.
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});
