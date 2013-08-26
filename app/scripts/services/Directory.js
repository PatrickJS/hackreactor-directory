'use strict';

hackreactor
  .factory('Directory', function($window) {
    var directory = $window._directoryJSON;


    // Public API here
    return directory;
  });
