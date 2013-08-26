'use strict';

hackreactor
  .controller('MainCtrl', ['$scope', '$location', '$routeParams',
    function($scope, $location, $routeParams) {
      $scope.directory = window._directoryJSON;

      $scope.searchText = '';

      $scope.personUrl = function(person) {
        var index = ($routeParams.id) ? $routeParams.id : $scope.directory.indexOf(person);
        return '#/person/' + index;
      };
      $scope.personEditUrl = function(person) {
        var index = ($routeParams.id) ? $routeParams.id : $scope.directory.indexOf(person);
        return '#/person/edit/' + index;
      };
      $scope.remove = function(person) {
        var index = ($routeParams.id) ? $routeParams.id : $scope.directory.indexOf(person);
        $scope.directory.splice(index, 1);
        $location.path('/');
      };

    }
  ]);
