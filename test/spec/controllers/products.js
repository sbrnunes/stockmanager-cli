'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('stockmanagerApp'));

  var controller, scope, categoriesService, productsService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, categoriesSvc, productsSvc) {
    scope = $rootScope.new();
    controller = $controller("ProductsCtrl", { $scope: scope, $categoriesService: categoriesSvc, $productsServices: productsSvc });
  }));


  //it('should load an array with 3 categories', function () {
  //    expect(categoriesService.loadCategories().length).toBe(2);
  //  });



});
