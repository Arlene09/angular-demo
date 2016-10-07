'use strict';

describe('angular_demo.services module', function () {

  beforeEach(module('angular_demo.services'));

  describe('angular_demo service', function () {

    var scope, httpBackend;
    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      httpBackend.when("GET", "http://192.168.2.129/api/v1/init").respond([{
        status: {code: 10000},
        data: {name: 'szq'}
      }, {}, {}]);
      $controller('LoginCtrl', {
        $scope: scope,
        $http: $http
      });
    }));

    it("init app service", function () {
      httpBackend.flush();
    });


  });
});
