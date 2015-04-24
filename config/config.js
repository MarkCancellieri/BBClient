'use strict';

// Environment-dependent configuration according to the 'NODE_ENV' variable
var config = require('./env/config.' + process.env.NODE_ENV + '.js');

// Configuration for all environments
config.siteName = 'Faux Forums';
config.sessionSecret = '6483RsI172d3AqGH5Oq9eXN4yElSSY0u';    // random

module.exports = config;
