'use strict';

// Module dependencies
var request = require('request');
var config  = require('../../../config/config');

// API options object - e.g. {server: 'http://localhost:4242'}
var apiOptions = config.apiOptions;

var getPageLinks = function(req, res, page, limit, boardsData) {
  var pageLinks = [];
  var pageIndex;

  for (var i = 1; i <= boardsData.pageCount; i++) {
    pageIndex = i - 1;
    pageLinks[pageIndex] = {};
    pageLinks[pageIndex].pageNumber = i;
    pageLinks[pageIndex].pageLink = req.path + '?page=' + i + '&limit=' + limit;
    if (page === i) {
      pageLinks[pageIndex].pageClass = 'active';
    }
  }

  return pageLinks;
};

var getListOfBoards = function(req, res, next) {
  var page  = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);
  var path  = '/api/boards';
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {
      page: page,
      limit: limit
    }
  };

  request(requestOptions, function(err, response, body) {
    var previousLink;
    var nextLink;
    var pageLinks;

    if (err) {
      next(err);
    } else {
      // Get the link to go to the previous page
      if (res.locals.paginate.hasPreviousPages) {
        previousLink = res.locals.paginate.href(true);
      }
      // Get the link to go to the next page
      if (res.locals.paginate.hasNextPages(body.pageCount)) {
        nextLink = res.locals.paginate.href(false);
      }
      // Get the links for the page numbers
      pageLinks = getPageLinks(req, res, page, limit, body);

      res.render('server.views.boards.boards-list.hbs', {
        pageName      : 'Home',
        boards        : body.boards,
        previousLink  : previousLink,
        nextLink      : nextLink,
        pageLinks     : pageLinks,
        userFirstName : req.user ? req.user.firstName : ''
      });
    }
  });
};

module.exports = getListOfBoards;
