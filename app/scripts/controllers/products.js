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

    $scope.categories = loadCategories();

    $scope.gridOptions = {
      enableSorting: true,
      columnDefs: [
        {name: 'Reference', field: 'productreference', enableCellEdit: false},
        {name: 'Name', field: 'name', enableCellEdit: true},
        {name: 'Cost', field: 'cost', enableCellEdit: true},
        {name: 'Price', field: 'price', enableCellEdit: true},
        {name: 'Quantity', field: 'stock', enableCellEdit: false}
      ],
      data: loadAllProducts()
    };

    $scope.loadAllProducts = function () {
      loadAllProducts();
    };

    $scope.loadProductsByCategory = function (category) {
      loadProductsByCategory(category);
    };

    function loadCategories() {
      return CategoriesService.loadCategories();
    }

    function loadAllProducts() {
      ProductsService.loadAllProducts().then(
        function (payload) {
          $scope.gridOptions.data = payload;

          for (var itemIndex = 0; itemIndex < payload.length; itemIndex++) {
            ProductsService.loadStockForProduct(payload[itemIndex]);
          }
        },
        function (errorPayload) {
          $log.error('Could not load products', errorPayload);
        }
      );
    }

    function loadProductsByCategory(category) {
      ProductsService.loadProductsByCategory(category).then(
        function (payload) {
          $scope.gridOptions.data = payload;
        },
        function (errorPayload) {
          $log.error('Could not load products', errorPayload);
        }
      );
    }
  });

