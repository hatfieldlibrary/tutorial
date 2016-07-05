/**
 * This version of the controller is similar to how I did it in the DSpace client.
 * Created by mspalti on 7/5/16.
 */


module.exports = function (req, res) {

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
        name : 'Deployment Ready'
      }
  ]);

};
