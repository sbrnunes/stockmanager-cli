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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });