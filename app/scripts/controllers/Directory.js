'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope', 'Directory', '$window',
    function($scope, Directory, $window) {
      $scope.directory = window._directoryJSON;

    } // end function
  ]);

