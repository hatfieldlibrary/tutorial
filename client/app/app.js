'use strict';

(function () {
  var tutorial = angular.module('tutorialApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'angular-loading-bar',
    // This is new to Mike!
    'ui.router'
  ]);

  tutorial.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Set up the Angular route(s).  This one defines the default route.
    // index.html file. --ms
    $urlRouterProvider

      .otherwise('/main');

    $locationProvider.html5Mode(true);
  })

  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading';
  }])

  // This uses Angular UI's stateprovider (ui.router).  For comparison of stateprovider and routeprovider (ngRoute),
  // see: http://stackoverflow.com/questions/27645202/what-is-the-difference-between-routeprovider-and-stateprovider-in-angularjs
  // I haven't taken advantage of stateprovider in my own projects, but I'm sure
  // there are cases when I should have considered it -- for the reasons described in the
  // stackoverflow post. The argument against using it?  It's not part of the core Angular
  // project and always seems to be in alpha or beta release.
  //
  // Note that the stateprovider example below sets the controller and the templateUrl.
  // If you wonder where 'MainCtrl' is defined, look in the client/app/main directory. --ms
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .state('test', {
          url: '/test',
          templateUrl: 'app/test/example.html',
          controller: 'TestCtrl'
        });
    });


})();



