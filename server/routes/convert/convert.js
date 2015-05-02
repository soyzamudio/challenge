'use strict';

// require Convert model
var Convert = require('../../models/convert')

module.exports = {
  handler : function(request, reply) {
    // Call Convert.convertToCSV method with Payload from client
    Convert.convertToCSV(request.payload.objects, function(err, csv) {
      // if error === true reply with a 400
      if (err) { reply().code(400); }
      // else send csv to client side
      reply({csv: csv})
    });
  }
};
