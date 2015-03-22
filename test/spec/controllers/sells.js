'use strict';

describe('Controller: SellsCtrl', function () {

  // load the controller's module
  beforeEach(module('stockmanagerApp'));

  var SellsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SellsCtrl = $controller('SellsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
