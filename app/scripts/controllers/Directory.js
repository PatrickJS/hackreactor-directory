'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope', 'Directory',
    function($scope, Directory) {
      $scope.directory = window._directoryJSON;
      $scope.remove = function(person) {
        var index = $scope.directory.indexOf(person);
        $scope.directory.splice(index, 1);
      };
    } // end function
  ]);

