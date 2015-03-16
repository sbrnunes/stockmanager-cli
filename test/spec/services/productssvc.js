'use strict';

describe('Service: ProductsSvc', function () {

  // load the service's module
  beforeEach(module('stockmanagerApp'));

  // instantiate service
  var ProductsSvc;
  beforeEach(inject(function (_ProductsSvc_) {
    ProductsSvc = _ProductsSvc_;
  }));

  it('should do something', function () {
    expect(!!ProductsSvc).toBe(true);
  });

});
