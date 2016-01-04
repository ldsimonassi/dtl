'use strict';

describe('Controller: DoctorCtrl', function () {

  // load the controller's module
  beforeEach(module('angTestApp'));

  var DoctorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DoctorCtrl = $controller('DoctorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DoctorCtrl.awesomeThings.length).toBe(3);
  });
});
