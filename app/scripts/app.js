'use strict';

angular.module('hackreactorApp', ['ngRoute', 'ngResource', 'ngAnimate'])
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
