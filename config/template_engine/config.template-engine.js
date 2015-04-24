'use strict';

// Module dependencies
var handlebars     = require('express-handlebars');

module.exports = function(app) {
  var viewsPath = './app_server/views';
  app.set('views', viewsPath);
  var hbs = handlebars.create({
    extname: '.hbs',
    defaultLayout: 'server.views.layouts.main.hbs',
    layoutsDir: viewsPath + '/layouts',
    partialsDir: viewsPath + '/partials'
  });
  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');
};
