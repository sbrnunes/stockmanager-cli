'use strict';

/**
 * @ngdoc function
 * @name stockmanagerApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the stockmanagerApp
 */
angular.module('stockmanagerApp')
  .controller('ProductsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
