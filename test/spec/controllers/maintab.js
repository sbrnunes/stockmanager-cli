'use strict';

describe('Controller: MaintabCtrl', function () {

  // load the controller's module
  beforeEach(module('stockmanagerApp'));

  var MaintabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaintabCtrl = $controller('MaintabCtrl', {
      $scope: scope
    });
  }));

});
