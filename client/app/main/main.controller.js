'use strict';

angular.module('tutorialApp')
  //.config(['$httpProvider', function ($httpProvider) {
  //  $httpProvider.defaults.useXDomain = true;
  //  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  //}])

  .controller('MainCtrl', function ($scope, $http) {


    $scope.awesomeThings = [];

    // In the DSpace client I define AngularJs factory methods
    // that return a resource for all of the api calls.  But using
    // Angular http works just fine. --ms
    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('eads/ead.xml').success(function (testead) {
      console.log(testead) ;
      // $scope.awesomeThings = awesomeThings;
    });


    //   $http.get('/api/findingaids').success(function (EADS) {
 //     $scope.EADS = EADS;
 //   });

    $http.jsonp('http://exist.willamette.edu:8080/exist/apps/test/ModQuery.xquery?q=wallulah&collection=wallulah&type=search&callback=JSON_CALLBACK')
      .success(function (Wallulahs) {
        $scope.Wallulahs = Wallulahs;

        $scope.items = [];
        angular.forEach(Wallulahs.item, function(value, key) {
          $scope.items.push(value);
        });

         console.log(Wallulahs)
      });


    //http://archiveswest.orbiscascade.org/ark:/80444/xv76635/xml

   // $http.get('http://archiveswest.orbiscascade.org/ark:/80444/xv76635/xml')
    //  .success(function (EAD) {
        //$scope.EAD = EAD;
//


   //     console.log(EAD)
 //     });
  });


