'use strict';

angular.module('hackreactorApp')
  .directive('directory', function () {
    return {
      template: '<div>{{message}}</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.message = 'Hack Reactor Directory';
        // element.text('this is the directory directive');
      }
    };
  });
