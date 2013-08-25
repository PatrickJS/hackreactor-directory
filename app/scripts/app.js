'use strict';

angular.module('hackreactorApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DirectoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
