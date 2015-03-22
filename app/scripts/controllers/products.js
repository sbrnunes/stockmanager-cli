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

    $scope.gridOptions = {
            enableSorting: true,
            columnDefs: [
              { name:'Reference', field: 'productreference', enableCellEdit:false},
              { name:'Name', field: 'name', enableCellEdit:true },
              { name:'Cost', field: 'cost', enableCellEdit:true },
              { name:'Price', field: 'price', enableCellEdit:true },
              {name: 'Quantity', field: 'stock', enableCellEdit: false}
            ]
          };

    $scope.loadAllProducts = function () {
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
    };

    $scope.loadProductsByCategory = function (category) {
      ProductsService.loadProductsByCategory(category).then(
        function (payload) {
          $scope.gridOptions.data = payload;
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

