'use strict';

angular.module('convert')
.factory('Convert', ['$http', function($http) {

  function convert(objects) {
    // http request to the endpoint where it will be converted
    // objects = array of objects
    return $http.post('/convert', {objects: objects});
  }

  return {convert:convert};

}]);
