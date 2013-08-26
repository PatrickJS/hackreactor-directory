'use strict';

angular.module('hackreactorApp', ['ngRoute', 'ngResource', 'ngAnimate', 'ui.bootstrap'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DirectoryCtrl'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'DirectoryCtrl'
      })
      .when('/person/:id', {
        templateUrl: 'views/table.html',
        controller: 'PersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
