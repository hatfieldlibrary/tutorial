/**
 * NOTE: I've moved the 'thing' controller into a controllers directory. --ms
 * 
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
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
