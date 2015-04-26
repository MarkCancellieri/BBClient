'use strict';

// Module dependencies
var boardsList = require('../../../app_api/boards-list');

var getBoards = function(page, limit) {
  var results = boardsList.length;
  var pageCount = Math.ceil(results / limit);

  // Set page to last page if greater than total number of pages
  page = (page > pageCount) ? pageCount : page;

  var startIndex = (page - 1) * limit;
  var endIndex = (page - 1) * limit + limit;
  var boardsData = {};

  boardsData.pageCount = pageCount;
  boardsData.boards = boardsList.slice(startIndex, endIndex);

  return boardsData;
};

var getPageLinks = function(req, res, page, limit, boardsData) {
  var pageLinks = [];
  for (var i = 1; i <= boardsData.pageCount; i++) {
    pageLinks[i-1] = {};
    pageLinks[i-1].pageNumber = i;
    pageLinks[i-1].pageLink = '/?page=' + i + '&limit=' + limit;
    if (page === i) {
      pageLinks[i-1].pageClass = 'active';
    }
  }

  return pageLinks;
};

// Get a list of boards
var getListOfBoards = function(req, res){
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);
  var boardsData = getBoards(page, limit);
  var pageLinks = getPageLinks(req, res, page, limit, boardsData);
  if (res.locals.paginate.hasPreviousPages) {
    var previousLink = res.locals.paginate.href(true);
  }
  if (res.locals.paginate.hasNextPages(boardsData.pageCount)) {
    var nextLink = res.locals.paginate.href(false);
  }

  res.render('server.views.boards.boards-list.hbs', {
    pageName: 'Home',
    boards: boardsData.boards,
    previousLink: previousLink,
    nextLink: nextLink,
    pageLinks: pageLinks
  });
};

module.exports = getListOfBoards;
