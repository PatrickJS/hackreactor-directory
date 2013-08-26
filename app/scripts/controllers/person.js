'use strict';

angular.module('hackreactorApp')
  .controller('PersonCtrl', ['$scope', '$routeParams', '$location',
    function($scope, $routeParams, $location) {
      $scope.person = $scope.directory[$routeParams.id];
      $scope.save = function(person) {
        console.log('save' + person);
        $location.path('/');
      };
      $scope.gravatar = (function() {
        var cache = {};
        return function(email) {
          return (cache[email]) ? cache[email] : cache[email] = 'http://www.gravatar.com/avatar/'+ $.md5(email.toLowerCase()) +'.jpg';
        }
      }());
    }
  ]);
