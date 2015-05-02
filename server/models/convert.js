'use strict';

var jsonexport = require('jsonexport');

function convertToCSV(objects, cb) {
  // Parse string into array of JSON Objects
  var data = JSON.parse(objects);

  // No sorting of keys
  var options = { orderHeaders: false }

  jsonexport(data, options, function(err, csv){
    // if error return callback with error = true
    if (err) { return cb(true, null); }
    // else return cb with csv format
    return cb(null, csv);
  });
}

module.exports = {convertToCSV:convertToCSV};
