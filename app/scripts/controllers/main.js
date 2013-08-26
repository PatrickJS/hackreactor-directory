'use strict';

angular.module('hackreactorApp')
  .controller('MainCtrl', ['$scope',
    function($scope) {
      $scope.directory = window._directoryJSON;

      $scope.searchText = '';

      $scope.personUrl = function(person) {
        var index = $scope.directory.indexOf(person);
        return '#/person/' + index;
      };

    }
  ]);
