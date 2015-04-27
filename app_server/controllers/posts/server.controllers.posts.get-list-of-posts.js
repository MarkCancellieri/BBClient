'use strict';

// Module dependencies
var postsList = require('../../../app_api/posts-list');

var getPosts = function(req, res, page, limit) {
  var postsCount = postsList.length;
  var boardId = req.params.boardId;
  var matchingPosts = [];

  for (var i = 0; i < postsCount; i++) {
    if (postsList[i].boardId._id === boardId) {
      matchingPosts.push(postsList[i]);
    }
  }

  var pageCount = Math.ceil(matchingPosts.length / limit);

  // Set page to last page if greater than total number of pages
  page = (page > pageCount) ? pageCount : page;

  var startIndex = (page - 1) * limit;
  var endIndex = (page - 1) * limit + limit;
  var postsData = {};

  postsData.pageCount = pageCount;
  postsData.posts = matchingPosts.slice(startIndex, endIndex);

  return postsData;
};

var getPageLinks = function(req, res, page, limit, postsData) {
  var pageLinks = [];
  for (var i = 1; i <= postsData.pageCount; i++) {
    pageLinks[i-1] = {};
    pageLinks[i-1].pageNumber = i;
    pageLinks[i-1].pageLink = req.path + '?page=' + i + '&limit=' + limit;
    if (page === i) {
      pageLinks[i-1].pageClass = 'active';
    }
  }

  return pageLinks;
};

// Get a list of posts
var getListOfPosts = function(req, res){
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);
  var postsData = getPosts(req, res, page, limit);
  var pageLinks = getPageLinks(req, res, page, limit, postsData);

  if (res.locals.paginate.hasPreviousPages) {
    var previousLink = res.locals.paginate.href(true);
  }
  if (res.locals.paginate.hasNextPages(postsData.pageCount)) {
    var nextLink = res.locals.paginate.href(false);
  }

  res.render('server.views.posts.posts-list.hbs', {
    pageName: 'Home',
    posts: postsData.posts,
    previousLink: previousLink,
    nextLink: nextLink,
    pageLinks: pageLinks
  });
};

module.exports = getListOfPosts;
