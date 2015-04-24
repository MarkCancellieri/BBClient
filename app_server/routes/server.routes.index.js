'use strict';

// Module dependencies
var express           = require('express');
var router            = express.Router();
var homeController    = require('../controllers/server.controllers.home.js');

// Home page
router.get('/', homeController.getHomePage);

module.exports = router;
