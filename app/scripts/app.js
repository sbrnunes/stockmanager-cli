'use strict';

/**
 * @ngdoc overview
 * @name stockmanagerApp
 * @description
 * # stockmanagerApp
 *
 * Main module of the application.
 */
angular
  .module('stockmanagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.edit'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/sells', {
        templateUrl: 'views/sells.html',
        controller: 'SellsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
