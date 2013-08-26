'use strict';

hackreactor
  .filter('phoneNumber', function() {
    return function (input) {
      return input.replace('-', '.');
    };
  });
