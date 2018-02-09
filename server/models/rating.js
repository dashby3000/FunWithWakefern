'use strict';

module.exports = function(Rating) {
  Rating.remoteMethod('customAPIEndpoint', {
    accepts: [
      {arg: 'msg', type: 'string'},
    ],
    returns: {arg: 'return', type: 'string'},
    http: {path: '/CustomAPI', verb: 'POST'}
  });

  Rating.customAPIEndpoint = function(msg, cb) {
    var retval = 'Got value: ' + msg;

    console.log(retval);

    cb(null, retval);
  };
};
