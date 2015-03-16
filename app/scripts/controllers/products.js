'use strict';

/**
 * @ngdoc function
 * @name stockmanagerApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the stockmanagerApp
 */
angular.module('stockmanagerApp')
  .controller('ProductsCtrl', function ($scope, categoriesService, productsService) {

    $scope.loadCategories = function() {
      return categoriesService.loadCategories();
    } ;

    $scope.loadAllProducts = function() {
      return productsService.loadAllProducts();
    };

    $scope.loadProductsByCategory = function(category) {
      return productsService.loadProductsByCategory(category);
    };
  });

