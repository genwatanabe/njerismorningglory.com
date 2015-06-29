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
  'app.photogallery',
  'app.programs',
  'app.community',
  'app.events'
]);

// Routes configuration
app.config(['$routeProvider','$logProvider', function($routeProvider, $logProvider) {
  $logProvider.debugEnabled(true);

  $routeProvider
    .when('/', {
      templateUrl: 'app/landing/landing.html?_='+Math.random()

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
    
    .when('/login', {
      templateUrl: 'app/landing/landing.html?_='+Math.random()
    })
    .when('/about', {
      templateUrl: 'app/about/school.html?_='+Math.random()
    })
    .when('/about/school', {
      templateUrl: 'app/about/school.html?_='+Math.random()
    })
    .when('/about/teachers', {
      templateUrl: 'app/about/teachers.html?_='+Math.random()
    })
    .when('/about/contact', {
      templateUrl: 'app/about/contact.html?_='+Math.random()
    })
    .when('/about/tour', {
      templateUrl: 'app/about/tour.html?_='+Math.random()
    })
    .when('/about/waldorf', {
      templateUrl: 'app/about/waldorf.html?_='+Math.random()
    })

    .when('/curriculum', {
      templateUrl: 'app/curriculum/overview.html?_='+Math.random()
    })
    .when('/curriculum/overview', {
      templateUrl: 'app/curriculum/overview.html?_='+Math.random()
    })
    .when('/curriculum/art-programs', {
      templateUrl: 'app/curriculum/art-programs.html?_='+Math.random()
    })
    .when('/curriculum/preschool', {
      templateUrl: 'app/curriculum/preschool.html?_='+Math.random()
    })
    .when('/curriculum/kindergarten', {
      templateUrl: 'app/curriculum/kindergarten.html?_='+Math.random()
    })
    .when('/curriculum/1st-grade', {
      templateUrl: 'app/curriculum/1st-grade.html?_='+Math.random()
    })
    .when('/curriculum/2nd-grade', {
      templateUrl: 'app/curriculum/2nd-grade.html?_='+Math.random()
    })
    .when('/curriculum/3rd-grade', {
      templateUrl: 'app/curriculum/3rd-grade.html?_='+Math.random()
    })
    .when('/curriculum/4th-grade', {
      templateUrl: 'app/curriculum/4th-grade.html?_='+Math.random()
    })
    .when('/curriculum/5th-grade', {
      templateUrl: 'app/curriculum/5th-grade.html?_='+Math.random()
    })

    .when('/programs', {
      templateUrl: 'app/programs/hands-on-art.html?_='+Math.random()
    })
    .when('/programs/hands-on-art', {
      templateUrl: 'app/programs/hands-on-art.html?_='+Math.random()
    })
    .when('/programs/summer-art-camp', {
      templateUrl: 'app/programs/summer-art-camp.html?_='+Math.random()
    })
    .when('/programs/spring-art-camp', {
      templateUrl: 'app/programs/spring-art-camp.html?_='+Math.random()
    })
    .when('/programs/ski-week-art-camp', {
      templateUrl: 'app/programs/ski-week-art-camp.html?_='+Math.random()
    })

    .when('/photogallery', {
      templateUrl: 'app/photogallery/ancient-olympic.html?_='+Math.random()
    })
    .when('/photogallery/ancient-olympic', {
      templateUrl: 'app/photogallery/ancient-olympic.html?_='+Math.random()
    })
    .when('/photogallery/spring-faire', {
      templateUrl: 'app/photogallery/spring-faire.html?_='+Math.random()
    })
    .when('/photogallery/yosemite', {
      templateUrl: 'app/photogallery/yosemite.html?_='+Math.random()
    })
    .when('/photogallery/china-town', {
      templateUrl: 'app/photogallery/china-town.html?_='+Math.random()
    })

    .when('/parents/calendar', {
      templateUrl: 'app/parents/calendar.html?_='+Math.random()
    })
    .when('/parents/handbook', {
      templateUrl: 'app/parents/handbook.php?_='+Math.random()
    })

    .when('/community/activities', {
      templateUrl: 'app/community/activities.html?_='+Math.random()
    })
    .when('/community/links', {
      templateUrl: 'app/community/links.html?_='+Math.random()
    })

    .when('/events/open-house', {
      templateUrl: 'app/events/open-house.html?_='+Math.random()
    })
    .when('/events/spring-faire', {
      templateUrl: 'app/events/spring-faire.html?_='+Math.random()
    })
    .when('/events/mfj', {
      templateUrl: 'app/events/mfj.html?_='+Math.random()
    })
    .when('/events/mae', {
      templateUrl: 'app/events/mae.html?_='+Math.random()
    })
    .when('/events/amahl', {
      templateUrl: 'app/events/amahl.html?_='+Math.random()
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
  $rootScope.appScope = $scope;

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

  if ($location.path() === '/login') {
    $scope.isLogInVisible = true;
  } else {
    $scope.isLogInVisible = false;
  }

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

// Defining the global functions as a service.

app.factory('AppService', ['$rootScope', '$resource', function($rootScope, $resource) {
  return {

    'loadBackImg': function(myHttp, myJsonFile) {
      
      var appScope = $rootScope.appScope;

      // Load the background image for various screen sizes on cache first and then display.
      var w = window,
          mm = w.matchMedia,
          parent = w.location.href.replace('#/',''),
          imgSrc = "",
          imgType = "",
          imgStyle = "";

      $resource(myJsonFile+'?_=' + Math.random()).query(function(data) {
        var len = data.length,
            i = 0,
            dObj;

        if (len == 0) {
          console.debug('ERROR: failed to load back-mg.json file data.');
          return;
        }

        // First data is the default one.
        dObj = data[i];
        imgSrc = dObj.img;
        imgType = dObj.type;
        imgStyle = dObj.css;

        // From second index, if the media queries match, apply their image and style.
        if ((len > 1) && mm) {
          for(i=1;i<len;i++) {
            dObj = data[i];
            if (mm(dObj.media).matches) {
              imgSrc = dObj.img;
              imgType = dObj.type;
              imgStyle = dObj.css;
              break;
            }
          }
        }

        //if (appScope.isShowBg === undefined) {
          myHttp.get(imgSrc, {headers: {'Content-Type': imgType}})
            .success(function(data, status, headers, config) {
              appScope.isShowBg = 1;
          });
          appScope.backImgSrc = imgSrc;
          appScope.backImgStyle = imgStyle;
        //}

      }); // query

    } // loadBackImg

  }
}]);
