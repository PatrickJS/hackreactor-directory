'use strict';

angular.module('hackreactorApp')
  .controller('DirectoryCtrl', ['$scope', 'angularFire',
    function($scope, angularFire) {
      var url = 'https://hackreactor.firebaseio.com/';
      angularFire(url, $scope, 'directory', {});
    }
  ]);

