/**
 * This version of the controller is similar to how I did it in the DSpace client.
 * Created by mspalti on 7/5/16.
 */


module.exports = function (req, res) {

  res.json([
      {
        name : 'This from server/api/controllers/thing.js'
      }, {
        name : 'Make exist dynamically accept jsonp callback name'
      }, {
        name : 'Parse item results, pretty up display'
      },  {
        name : 'try xml from archiveswest'
      }
 
  ]);

};
