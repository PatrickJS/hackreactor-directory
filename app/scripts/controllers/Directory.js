'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope', 'angularFire', 'Directory',
    function($scope, angularFire, Directory) {
      // var url = 'https://hackreactor.firebaseio.com/directory';
      // angularFire(url, $scope, 'directory', {}).then(function() {
        $scope.directory = Directory;

        var directory = $scope.directory;

        $scope.edit = function(index) {
          directory[index] = '';
        };


      // }); // end angularFire promise
    } // end function
  ]);

