'use strict';

/**
 * @ngdoc function
 * @name stockmanagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockmanagerApp
 */
angular.module('stockmanagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $('.carousel').carousel();
  });
