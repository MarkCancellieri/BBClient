'use strict';

module.exports = {
  bodyParser     : require('body-parser'),
  compress       : require('compression'),
  csurf          : require('csurf'),
  flash          : require('connect-flash'),
  logger         : require('morgan'),
  methodOverride : require('method-override'),
  paginate       : require('express-paginate'),
  serveFavicon   : require('serve-favicon'),
  session        : require('express-session'),
  _404           : require('../../lib/middleware/lib.middleware.404'),
  errorHandler   : require('../../lib/middleware/lib.middleware.error-handler')
};
