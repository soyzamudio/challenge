'use strict';

angular.module('convert', [])
.controller('ConverterCtrl', ['$scope', 'Convert', function($scope, Convert){
  $scope.convertInput = function() {
    Convert.convert($scope.textInput)
    .then(function(response) {
      var element = angular.element('<a/>');
      element.attr({
        href: 'data:attachment/csv;charset=utf-8,' + encodeURI(response.data.csv),
        target: '_blank',
        download: 'file.csv'
      })[0].click();
    });
  };
}]);
