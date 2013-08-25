'use strict';

angular.module('hackreactorApp')
  .factory('Directory', function($window) {
    var directory = $window._directoryJSON;


    // Public API here
    return directory.users;
  });
