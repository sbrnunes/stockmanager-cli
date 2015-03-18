'use strict';

describe('Controller: ProductsCtrl', function ()
{

  var controller, scope, CategoriesServiceMock, ProductsServiceMock;

  // load the controller's module
  beforeEach(module('stockmanagerApp'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope)
  {
    scope = $rootScope.$new();

    CategoriesServiceMock = jasmine.createSpyObj('CategoriesServiceMock', ['loadCategories','banana']);
    ProductsServiceMock = jasmine.createSpyObj('ProductsServiceMock', ['loadAllProducts']);

    controller = $controller("ProductsCtrl", {
      $scope: scope,
      CategoriesService: CategoriesServiceMock,
      ProductsService: ProductsServiceMock
    });

  }));

  it('should have defined the loadCategories function', function ()
  {
    expect(scope.loadCategories).toBeDefined();
  });

  it('should invoke loadCategories on categoriesService', function ()
  {
    scope.loadCategories();
    expect(CategoriesServiceMock.loadCategories).toHaveBeenCalled();
  });

  it('should invoke loadCategories on categoriesService and return the untouched list of categories', function ()
  {
    var categories = [
      {'id':'id_1', 'name':'name_1'},
      {'id':'id_2', 'name':'name_2'}
    ];

    CategoriesServiceMock.loadCategories.and.returnValue(value);

    expect(scope.loadCategories()).toEqual(value);
  });

});
