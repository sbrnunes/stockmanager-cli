'use strict';

/**
 * @ngdoc service
 * @name stockmanagerApp.ProductsSvc
 * @description
 * # ProductsSvc
 * Service in the stockmanagerApp.
 */
angular.module('stockmanagerApp')
  .service('productsService', function ($http) {

    this.loadAllProducts = function (callback) {
      console.log('Loading all products');
      $http.get('http://localhost:8080/product').
        success(function (data, status, headers, config)
        {
          return data;
        }).
        error(function (data, status, headers, config)
        {
          alert(error);
        });
    };

    this.loadProductsByCategory = function (category) {
      console.log('Loading products for ' + category);
      $http.get('http://localhost:8080/product/' + category).
        success(function (data, status, headers, config)
        {
          return data;
        }).
        error(function (data, status, headers, config)
        {
          alert(error);
        });
    };
  });
