/**
 * Created by mspalti on 7/8/16.
 */

module.exports = function (req, res) {
  
  var name = req.param('name');

  res.json(
    {
      message : 'Hi, ' + name
    }
  );

};
