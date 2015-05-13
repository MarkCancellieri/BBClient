'use strict';

// Environment-dependent configuration according to the 'NODE_ENV' variable
var config = require('./env/config.' + process.env.NODE_ENV + '.js');

// Configuration for all environments
config.siteName                  = 'Faux Forums';
config.sessionSecret             = '6483RsI172d3AqGH5Oq9eXN4yElSSY0u';
config.paginateDefaultLimit      = 10;     // Default results per page
config.paginateMaxLimit          = 50;     // Maximum results per page
config.boardPaginateDefaultLimit = 10;     // Default results per page
config.boardPaginateMaxLimit     = 100;    // Maximum results per page

module.exports = config;
