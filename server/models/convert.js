'use strict';

var jsonexport = require('jsonexport');

function convertToCSV(objects, cb) {
  // Parse string into array of JSON Objects
  var data = JSON.parse(objects);
  jsonexport(data, function(err, csv){
    // if error return callback with error = true
    if (err) { return cb(true); }
    // else return cb with csv format
    return cb(null, csv);
  });
}

module.exports = {convertToCSV:convertToCSV};
