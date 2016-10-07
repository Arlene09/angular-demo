  'use strict';
  angular.module('angular_demo')
    .config(function ($httpProvider) {

      //API统一为JSON格式
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';

    });


