'use strict';

angular.module('tutorialApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    // In the DSpace client I define AngularJs factory methods
    // that return a resource for all of the api calls.  But using 
    // Angular http works just fine. --ms
    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
