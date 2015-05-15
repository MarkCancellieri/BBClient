'use strict';

// Set environment variables if undefined
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT     = process.env.PORT     || 3000;

// Module dependencies
var http    = require('http');
var express = require('./config/express/config.express');

// Create a new Express application instance
var app = express();

// Create a new HTTP server
var server = http.createServer(app);

// Listen on process.env.PORT
server.listen(process.env.PORT, function() {
  console.log('Server listening on port ' + process.env.PORT);
  console.log('process.env.NODE_ENV = '   + process.env.NODE_ENV);
});

module.exports = server;
