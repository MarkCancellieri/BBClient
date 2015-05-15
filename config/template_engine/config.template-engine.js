'use strict';

// Module dependencies
var handlebars = require('express-handlebars');
var helpers    = require('./config.template-engine.helpers');

module.exports = function(app) {
  var viewsPath = './app_server/views';
  app.set('views', viewsPath);
  var hbs = handlebars.create({
    extname       : '.hbs',
    defaultLayout : 'server.views.layouts.main.hbs',
    layoutsDir    : viewsPath + '/layouts',
    partialsDir   : viewsPath + '/partials',
    helpers       : helpers
  });
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
};
