/**
 * Created by mspalti on 7/5/16.
 */

'use strict';

angular.module('tutorialApp')
  .controller('TestCtrl', function ($scope) {

    $scope.message = '';

    $scope.setMessage = function () {
      // To complete the assignment, you need to retrieve the new text via an 
      // api call. See the main.controller for an example. I'm going to cheat
      // and inline the value here.  --ms
      $scope.message = 'Nice job';
    };


  });
