'use strict';

angular.module('convert', [])
.controller('ConverterCtrl', ['$scope', 'Convert', function($scope, Convert){
  $scope.convertInput = function() {
    Convert.convert($scope.textInput)
    .then(function(response) {
      console.log(response);
    });
  };
}]);
