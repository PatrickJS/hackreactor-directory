'use strict';

angular.module('hackreactorApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      scope: {
      },
      template: '<div class="navbar navbar-inverse navbar-fixed-top">'+
                    '<div class="navbar-inner">'+
                      '<a class="brand" href="/">'+
                        '<img src="http://hackreactor.com/wp-content/uploads/2013/04/180px.png">'+
                      '</a>'+
                      '<ul class="nav pull-right">'+
                        // '<li><input type="text"></li>'+
                      '</ul>'+
                    '</div>'+
                '</div>',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
