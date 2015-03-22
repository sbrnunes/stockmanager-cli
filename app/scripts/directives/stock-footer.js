'use strict';

/**
 * @ngdoc directive
 * @name stockmanagerApp.directive:stockFooter
 * @description
 * # stockFooter
 */
angular.module('stockmanagerApp')
  .directive('stockFooter', function () {
    return {
      templateUrl: 'scripts/directives/templates/stock-footer.html'
    };
  });
