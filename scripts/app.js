'use strict';

var app = angular
  .module('PCApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'angularMoment',
    'ngMaterial',
    'ngMdIcons'
  ])
  .constant('FURL', 'https://project-6062039870921191651.firebaseio.com/')
  .run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/browse/:ideaId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/chapter', {
        templateUrl: 'views/chapter.html',
        controller: 'ChapterCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController',
        resolve: {
          currentAuth: function(Auth) {
            return Auth.requireAuth();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
