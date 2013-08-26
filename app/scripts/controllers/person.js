'use strict';

angular.module('hackreactorApp')
  .controller('PersonCtrl', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
      $scope.person = $scope.directory[$routeParams.id];
      $scope.save = function(person) {
        console.log('save' + person);
        $location.path('/');
      };
    }
  ]);
