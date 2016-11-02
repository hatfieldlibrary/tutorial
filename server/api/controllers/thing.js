/**
 * This version of the controller is similar to how I did it in the DSpace client.
 * Created by mspalti on 7/5/16.
 */


module.exports = function (req, res) {

  res.json([
      {
        name : 'This from server/api/controllers/thing.js!'
      }, {
        name : 'loading image'
    },   {
        name : 'Parse item results, pretty up display'
      },  {
        name : 'Put this on a separate page with show dates button'
      },  {
        name : 'Make exist dynamically accept jsonp callback name'
    }, {
        name : 'try xml'
      }

  ]);

};
