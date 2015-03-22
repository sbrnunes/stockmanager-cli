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

    function loadStockForProduct(productSqlId) {
      var deferred = $q.defer();

      // Simple GET load Stock For Product :
      $http.get('http://localhost:8090/stock/' + productSqlId).
        success(function(data, status, headers, config) {

          $log.debug(data);
          deferred.resolve(
            function(data) {
              var sqlProduct = angular.fromJson(data);
              if (sqlProduct != undefined) {
                return sqlProduct.stock;
              }
            }
          );
        }).
        error(function(data, status, headers, config) {
          deferred.resolve(function() {
            return 0;
          });
        });
      return deferred;
    };

    function process(data) {
      return data.content.map(function (item) {
        return {
          name: item.name,
          price: item.price,
          productreference: item.productreference,
          image: item.image,
          stock : loadStockForProduct(item.sqlid).then(function(stock){return stock;})
        }
      });
    }
  });
