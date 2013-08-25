'use strict';

angular.module('hackreactorApp')
  .filter('phoneNumber', function() {
    return function (input) {
      return input.replace('-', '.');
    };
  });
