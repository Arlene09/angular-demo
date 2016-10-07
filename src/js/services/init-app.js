'use strict';

angular.module('angular_demo.services')
  .factory('InitApp', function ($rootScope, 
                                AngularDemoResource, 
                                $state) {

    $rootScope.globalData = $rootScope.globalData || {};

    //app发送出去的第一个http请求
    var initApp = function () {

      console.log('first http request -- initApp');

      AngularDemoResource.Init.get().$promise.then(function (indata) {

        if (!!indata && indata.hasOwnProperty("data")) {

          if (indata.status.code == 10000) {

            $rootScope.globalData.isLoginState = true;

            if (!!indata.data && indata.data.hasOwnProperty('name')) {
              $rootScope.globalData.currentUserName = indata.data.name;
            }
            //如果是已登录状态,则跳转到网站main页
            $state.go('index.main');

          } else {
            $rootScope.globalData.isLoginState = false;
            //如果是未登录状态,则跳转到登录页
            $state.go('index.login');
          }


        }
      }, function (rejection) {

        $rootScope.globalData.isLoginState = false;
        $state.go('index.login');

        console.log('接口返回失败,失败数据' + angular.toJson(rejection));

      }).finally(function () {

      })

    };

    return {

      init: function () {
        initApp();
      }

    };

  });
