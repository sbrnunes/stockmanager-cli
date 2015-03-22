'use strict';

/**
 * @ngdoc function
 * @name stockmanagerApp.controller:MainTabCtrl
 * @description
 * # MainTabCtrl
 * Controller of the stockmanagerApp
 */
angular.module('stockmanagerApp')
  .controller('MainTabCtrl', function ($scope, $location) {

    $scope.tabs = [
      { 'url' : '#/', 'name' : 'Home' },
      { 'url' : '#/products', 'name' : 'Products' },
      { 'url' : '#/sells', 'name' : 'Sells' }
    ];

    $scope.isActive = function(url) {
      return $location.path() === url.substring(1);
    };

  });
