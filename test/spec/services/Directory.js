'use strict';

describe('Service: Directory', function () {

  // load the service's module
  beforeEach(module('hackreactorApp'));

  // instantiate service
  var Directory;
  beforeEach(inject(function (_Directory_) {
    Directory = _Directory_;
  }));

  it('should do something', function () {
    expect(!!Directory).toBe(true);
  });

});
