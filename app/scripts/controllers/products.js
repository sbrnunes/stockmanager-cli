'use strict';

/**
 * @ngdoc function
 * @name stockmanagerApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the stockmanagerApp
 */
angular.module('stockmanagerApp')
  .controller('ProductsCtrl', function ($scope, $log, CategoriesService, ProductsService) {

    $scope.loadAllProducts = function () {
      ProductsService.loadAllProducts().then(
        function (payload) {
          $scope.products = payload;
        },
        function (errorPayload) {
          $log.error('Could not load products', errorPayload);
        }
      );
    };

    $scope.loadProductsByCategory = function (category) {
      ProductsService.loadProductsByCategory(category).then(
        function (payload) {
          $scope.products = payload;
        },
        function (errorPayload) {
          $log.error('Could not load products', errorPayload);
        }
      );
    };

    function loadCategories() {
      $scope.categories = CategoriesService.loadCategories();
    }

    loadCategories();
  });

