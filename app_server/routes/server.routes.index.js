'use strict';

// Module dependencies
var express           = require('express');
var router            = express.Router();
var homeController    = require('../controllers/server.controllers.home.js');
var boardsController  = require('../controllers/server.controllers.boards.js');

// Home page
// router.get('/', homeController.getHomePage);
router.get('/', boardsController.getListOfBoards);

module.exports = router;
