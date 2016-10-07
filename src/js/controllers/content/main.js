'use strict';

angular.module('angular_demo.controllers')
  .controller('MainCtrl', function ($scope) {

    console.log('enter MainCtrl');

    $scope.data = {};

    //假数据
    $scope.data.ListData = [
      {name: 'hahahaha', id: '111'},
      {name: 'xixixixi', id: '222'},
      {name: 'heieheiehi', id: '333'}
    ];

    


  });
