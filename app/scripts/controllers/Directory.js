'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope',
    function($scope) {

      $scope.remove = function(person) {
        var index = $scope.directory.indexOf(person);
        $scope.directory.splice(index, 1);
      };
    } // end function
  ]);

