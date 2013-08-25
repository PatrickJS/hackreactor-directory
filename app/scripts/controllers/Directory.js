'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope', 'Directory', function($scope, Directory) {
    $scope.directory = Directory;
  }]);

