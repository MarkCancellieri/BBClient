'use strict';

// Module dependencies
var postsList = require('../../../app_api/posts-list');

var getPostById = function(req, res) {
  var postsCount   = postsList.length;
  var postId       = req.params.postId;
  var matchingPost;

  for (var i = 0; i < postsCount; i++) {
    if (postsList[i]._id === postId) {
      matchingPost = postsList[i];
      return matchingPost;
    }
  }
};

// Get a post
var getPost = function(req, res) {
  var post = getPostById(req, res);

  res.render('server.views.posts.display-post.hbs', {
    pageName : 'Posts',
    post     : post
  });
};

module.exports = getPost;
