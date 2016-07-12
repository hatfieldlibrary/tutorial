/**
 * Main application routes.
 *
 * This is where you tell the Express server how to handle HTTP requests. --ms
 */

'use strict';

var errors = require('./components/errors');

// This is the route to my modified controller.  -ms
var thing = require('./api/controllers/thing');

var fun = require('./api/controllers/fun');

// Add your additional routes here.

module.exports = function (app) {

  // Insert routes below.
  // Here's where you add your own route to the 'hello' controller. --ms
  app.use('/api/things', thing);
  
  app.use('/api/fun/:name', fun);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
