  'use strict';

  angular.module('angular_demo', [
      'ng',
      'angular_demo.controllers',
      'angular_demo.services',
      'angular_demo.filters',
      'angular_demo.directives',
      'ui.router',
      'ngResource',
      'cgNotify'
    ])
    .run(function ($rootScope, 
                   InitApp) {

      console.log('enter run function');

      // 用于全局数据
      $rootScope.globalData = $rootScope.globalData || {};

      //用户登陆状态
      $rootScope.globalData.isLoginState = false;

      // 用于定义notify
      $rootScope.globalData.notify_duration = 2000;
      $rootScope.globalData.notify_position = 'center';

      
      // TODO: 1.此处用于系统中一些全局功能的初始化
      // InitApp.init();

    });


  //模块定义
  angular.module('angular_demo.controllers', []);
  angular.module('angular_demo.services', []);
  angular.module('angular_demo.filters', []);
  angular.module('angular_demo.directives', []);

