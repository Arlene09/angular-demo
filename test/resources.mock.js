
// angular.module('angular_demo_mock', [
//     'ngMock'
//   ]);

console.log('enter----resources.mocks.js');


describe('angular_demo.services mock', function () {

  beforeEach(module('stateMock'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($state, $httpBackend) {//other vars as needed) {
    //initialize other stuff
    state = $state;
    httpBackend = $httpBackend;

    state.expectTransitionTo('http://192.168.2.129/api/v1/init');


    httpBackend.expect('GET', 'http://192.168.2.129/api/v1/init', undefined, undefined, undefined)
      .respond(function (method, url, data, headers, params) {
        return {status: {code: 10000}, data: {name: 'szq'}};
      });


    // $httpBackend.whenGET('http://192.168.2.129/api/v1/init')
    //   .respond({status:{code: 10000},data:{name: 'szq'}},{'X-Record-Count':100});

    
    // $httpBackend.flush();


  }));
});
