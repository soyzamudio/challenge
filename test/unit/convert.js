'use strict';

var expect = require('chai').expect;
var Convert = require('../../server/models/convert');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
require('../../server/index');

describe('Convert', function() {
  describe('convertToCSV', function() {

    it('should convert array of objects to csv', function(done) {
      var objects = '[ { "name": "Adam", "lastName" : "Smith", "gender" : "male", "country" : "Scotland" }, { "name": "George", "lastName" : "Washington", "gender" : "male", "country" : "USA" }, { "name": "Marie", "lastName" : "Curie", "gender" : "female", "country" : "France" }]';
      Convert.convertToCSV(objects, function(err, csv) {
        expect(err).to.not.be.ok;
        expect(csv).to.be.ok;
        done();
      });
    });

  });

});
