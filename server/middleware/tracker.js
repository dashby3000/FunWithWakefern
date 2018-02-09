var app = require('../server');
var uuidv4 = require('uuid/v4');

module.exports = function() {
  return function tracker(req, res, next) {

    if(req.url.startsWith(app.get('restApiRoot'))) {
      var url = req.url;
      var gid = req.headers['X-Global-Transaction-Id'];

      if (gid === undefined || gid === null) {
        gid = uuidv4();
      }

      console.log('[' + gid + '] Request tracking middleware triggered on \'%s\'', url);

      var start = process.hrtime();

      res.once('finish', function() {
        var diff = process.hrtime(start);
        var ms = diff[0] * 1e3 + diff[1] * 1e-6;

        console.log('[' + gid + '] The request processing time for \'%s\' is \'%d\' ms.', url, ms);
      });
    }

    next();
  };
};
