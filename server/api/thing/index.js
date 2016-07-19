/**
 * This is a good way to set up your API.  It allows you to define
 * all of your API routes here, rather than inside the Express config.routes
 * file.  Might also make tests easier to configure. (Here, the test is defined
 * inside thing.spec.js). --ms
 */
'use strict';

var express = require('express');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
