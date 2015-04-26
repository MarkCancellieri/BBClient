'use strict';

// Get home page
var getHomePage = function(req, res){
  res.render('server.views.boards.boards-list.hbs', {
    pageName: 'Home',
    pageHeader: {
      title: 'Totally Fake Website',
      subtitle: 'The World\'s Fakest Website Ever.'
    }
  });
};

module.exports = {
  getHomePage:  getHomePage
};
