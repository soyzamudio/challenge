'use strict';

angular.module('convert', [])
.controller('ConverterCtrl', ['$scope', 'Convert', function($scope, Convert){
  $scope.convertInput = function() {
    // Call factory and send input to the backend
    Convert.convert($scope.textInput)
    .then(function(response) {
      // call downloadFile function with response from backend
      swal({
        title: 'Conversion Complete',
        text: 'Your .csv file is ready to download!',
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#A5DC86',
        confirmButtonText: 'Download .csv',
        closeOnConfirm: false
      }, function() {
        downloadFile(response.data.csv);
      });

    })
    .catch(function() {
      swal('Wrong Syntax', 'JSON Syntax is incorrent, please check at: http://jsonlint.com/', 'error');
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
    swal.close();
  }
}]);
