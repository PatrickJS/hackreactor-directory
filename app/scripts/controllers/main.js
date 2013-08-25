'use strict';

angular.module('hackreactorApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Hack Reactor'
    ];
  }]);
