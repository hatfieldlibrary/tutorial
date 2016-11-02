/**
 * This version of the controller is similar to how I did it in the DSpace client.
 * Created by mspalti on 7/5/16.
 */
/**
module.exports = function (req, res) {
  var wudata = " [{name : 'Development Tools'}, {name : 'Server and Client integration'}, {name : 'Smart Build System'},  {name : 'Modular Structure'},  {name : 'Optimized Build'},{name : 'Deployment Ready? Not a chance'}]" ;

   res.json(wudata) ;
};

 */



module.exports = function (req, res, $http) {
    console.log(req.cookies) ;
   // $url ="http://exist.willamette.edu:8080/exist/apps/test/ModQuery.xquery?q=wallulah&collection=wallulah&type=search&callback=JSON_CALLBACK";
   // var mydata ;

   //  $http.jsonp($url).success(function (Wallulahs) {
   //       mydata = Wallulahs;
  //  });
      //  var mytest =  $http.get($url);
   // console.log(mydata);

    //    var wudata = " {name : 'Development Tools'}, {name : 'Server and Client integration'}, {name : 'Smart Build System'},  {name : 'Modular Structure'},  {name : 'Optimized Build'},{name : 'Deployment Ready? Not a chance'}" ;
   // var wudata = '{name:"Development Tools"}' ;

  //  console.log(wudata);
 //   res.json(wudata) ;

    res.json([
      {
        name : 'Development Tools'
      }, {
        name : 'Server and Client integration'
      }, {
        name : 'Smart Build System'
      },  {
        name : 'Modular Structure'
      },  {
        name : 'Optimized Build'
      },{
        name : 'Deployment Ready? Not a chance'
      }
  ]);

};
