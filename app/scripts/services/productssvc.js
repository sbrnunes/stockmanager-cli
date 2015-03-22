'use strict';

/**
 * @ngdoc service
 * @name stockmanagerApp.ProductsSvc
 * @description
 * # ProductsSvc
 * Service in the stockmanagerApp.
 */
angular.module('stockmanagerApp')
  .service('ProductsService', function ($http, $log, $q) {

    this.loadAllProducts = function () {
      var deferred = $q.defer();
      $http.get('http://localhost:8080/product')
        .success(function (data) {
          $log.debug(data);
          deferred.resolve(process(data));
        })
        .error(function (msg, code) {
          $log.error(msg, code);
          deferred.reject(msg);
        });
      return deferred.promise;
    };

    this.loadProductsByCategory = function (category) {
      var deferred = $q.defer();
      $http.get('http://localhost:8080/product?category=' + category)
        .success(function (data) {
          $log.debug(data);
          deferred.resolve(process(data));
        })
        .error(function (msg, code) {
          $log.error(msg, code);
          deferred.reject(msg);
        });
      return deferred.promise;
    };

    this.loadStockForProduct = function (product) {
      // Simple GET load Stock For Product :
      $http.get('http://localhost:8090/stock/' + product.sqlid).
        success(function (data, status, headers, config) {

          $log.debug(data);
              var sqlProduct = angular.fromJson(data);
              if (sqlProduct != undefined) {
                product.stock = stock;
              }
        }).
        error(function (data, status, headers, config) {
          $log.debug('Stock: 0 ');
          product.stock = 0;
        });
    };

    function process(data) {
      return data.content.map(function (item) {
        return {
          name: item.name,
          price: item.price,
          productreference: item.productreference,
          image: item.image,
          sqlid: item.sqlid,
          stock: -1
        }
      });
    }

  });
