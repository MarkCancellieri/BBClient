'use strict';

// Module dependencies
var express = require('express');
var router = express.Router();
var boardsController = require('../controllers/server.controllers.boards.js');
var postsController = require('../controllers/server.controllers.posts.js');

// Home page
router.get('/', boardsController.getListOfBoards);

// Board routes
router.get('/boards', boardsController.getListOfBoards);
router.get('/boards/:boardId', postsController.getListOfPosts);
router.get('/boards/:boardId/:boardName', postsController.getListOfPosts);

// Post routes
router.get('/posts/:postId', postsController.getPost);
router.get('/posts/:postId/:postName', postsController.getPost);

module.exports = router;
