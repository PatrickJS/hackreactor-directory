'use strict';

var ng = angular;
var hackreactor =
  ng.module('hackreactorApp', ['ngRoute', 'ngResource', 'ngAnimate']);
hackreactor.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/table', {
        templateUrl: 'views/table.html'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .when('/person/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'PersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
