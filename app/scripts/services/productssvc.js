'use strict';

/**
 * @ngdoc service
 * @name stockmanagerApp.ProductsSvc
 * @description
 * # ProductsSvc
 * Service in the stockmanagerApp.
 */
angular.module('stockmanagerApp')
  .service('productsService', function () {

    this.loadAllProducts = function() {
      console.log('Loading all products');
    };

    this.loadProductsByCategory = function(category) {
      console.log('Loading products for ' + category);
    };
  });
