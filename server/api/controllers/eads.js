/**
 * This version of the controller is similar to how I did it in the DSpace client.
 * Created by mspalti on 7/5/16.
 */
// http://exist.willamette.edu:8080/exist/apps/test/ModQuery.xquery?q=the%20scene&collection=scene&type=search

module.exports = function (req, res) {

  fs = require('fs');





    fs.readFile('../../views/ead.xml', 'utf8', function (err,data){
    if (err) {

      console.log(err);
    }
      console.log("DATA: " + data);
      res.json(data) ;
    });

/*
  res.json([
      {
        name : 'This from server/api/controllers/eads.js'
      }, {
        name : 'Server and Client integration'
      }, {
        name : 'Smart Build System'
      },  {
        name : 'Modular Structure'
      },  {
        name : 'Optimized Build'
      },{
        name :  data
      }
  ]);
*/
};
