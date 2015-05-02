'use strict';

angular.module('convert', [])
.controller('ConverterCtrl', ['$scope', 'Convert', '$window', function($scope, Convert, $window){
  $scope.convertInput = function() {
    Convert.convert($scope.textInput)
    .then(function(response) {
      console.log(response);
    });
  };
}]);
