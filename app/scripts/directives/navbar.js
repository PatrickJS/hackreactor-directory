'use strict';

angular.module('hackreactorApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      scope: {
        search: "&"
      },
      template: '<div class="navbar navbar-fixed-top">'+
                    '<div class="navbar-inner">'+
                      '<div class="container">'+
                        '<input ng-model="">'+
                      '</div>'+
                    '</div>'+
                '</div>',
      link: function postLink(scope, element, attrs) {
        element.text('this is the navbar directive');
      }
    };
  });
