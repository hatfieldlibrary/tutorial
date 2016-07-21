/**
 * Created by mspalti on 7/5/16.
 */

'use strict';

angular.module('tutorialApp')
  .controller('ExampleCtrl', function ($scope) {

    $http.get('/assets/eads/ead.xml').success(function (testead) {
      console.log(testead) ;
      // $scope.awesomeThings = awesomeThings;
    });


  });
