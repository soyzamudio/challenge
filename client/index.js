'use strict';

angular.module('convert', [])
.controller('ConverterCtrl', ['$scope', 'Convert', function($scope, Convert){
  $scope.convertInput = function() {
    // Call factory and send input to the backend
    Convert.convert($scope.textInput)
    .then(function(response) {
      // call downloadFile function with response from backend
      downloadFile(response.data.csv);
    });
  };

  function downloadFile(csv) {
    //create  element with csv file to download
    var element = angular.element('<a/>');
    element.attr({
      href: 'data:attachment/csv;charset=utf-8,' + encodeURI(csv),
      target: '_blank',
      download: 'file.csv'
    })[0].click();
  }
}]);
