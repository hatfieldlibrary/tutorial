

'use strict';

angular.module('tutorialApp')
  .controller('ExampleCtrl', function ($scope, $http) {


    $http.get('/assets/eads/ead.xml').success(function (testead) {
      console.log(testead) ;

 //     var x2j = $injector.get('ngXml2json');
 //     var jsonObject = x2j.parser(testead)


      $http.get('/assets/glacier.json')
        .success(function (Glacier) {
          $scope.Glacier = Glacier;

          $scope.gitems = [];
          angular.forEach(Glacier.ArchiveList, function(value, key) {
            $scope.gitems.push(value);
          });

          console.log(Glacier)
          console.log(gitems)
        });

      // $scope.awesomeThings = awesomeThings;
    });


  });
