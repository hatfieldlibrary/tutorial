/**
 * Created by mspalti on 7/5/16.
 */

'use strict';

angular.module('tutorialApp')
  .controller('TestCtrl', function ($scope, $http) {

    $scope.message = '';

    $scope.name = '';

    $scope.setMessage = function () {
      // To complete the assignment, you need to retrieve the new text via an
      // api call. See the main.controller for an example. I'm going to cheat
      // and inline the value here.  --ms
      // $scope.message = 'Nice job';

      console.log('getting message');
      $http.get('/api/fun/' + $scope.name).success(function (data) {
        console.log('got message');
        console.log(data);
        $scope.message = data.message;
      });
    };


  });
