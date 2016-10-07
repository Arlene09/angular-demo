'use strict';

angular.module('angular_demo.controllers')
  .controller('LoginCtrl', function ($scope,
                                     $state,
                                     AngularDemoResource,
                                     $rootScope,
                                     notify) {


    console.log('enter LoginCtrl');


    $scope.data = {
      title: '登录',
      email: '',
      password: '',
      tip: '',
      is_login: false // 不可登录

    };

    $scope.action = {};
    $scope.action.toLogin = function () {
      console.log("$scope.data.email is " + $scope.data.email);
      isLogin();
      if ($scope.data.is_login) {

        //TODO: 2.调登录接口
        // toLogin();

        if($scope.data.email == '1@1.cn' && $scope.data.password == '123456'){
          //模拟接口请求成功后的返回数据
          var indata = {
            status: {code: 10000, message: '登录成功'},
            data: {name: 'szq'}
          };
          //登录成功后的相关逻辑处理
          $rootScope.globalData.isLoginState = true;
          $rootScope.globalData.currentUserName = indata.data.name;
          notify({
            message: indata.status.message,
            position: $rootScope.globalData.notify_position,
            duration: $rootScope.globalData.notify_duration
          });

          $state.go("index.main");

        }




      }
    };


    function isLogin() {

      var str = $scope.data.email.trim();
      if (str.length != 0 && $scope.data.password.trim().length >= 6) {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

        if (!reg.test(str)) {
          $scope.data.is_login = false;
          $scope.data.tip = '输入不合法';
        } else {
          $scope.data.is_login = true;
        }
      } else {
        $scope.data.tip = '输入不合法';
      }

      console.log("$scope.data.is_login is" + $scope.data.is_login);
    }


    //登录接口
    function toLogin() {

      var login = new AngularDemoResource.Login();
      login.username = $scope.data.email;
      login.password = $scope.data.password;

      login.$save().then(function (indata) {

        if (!!indata && indata.hasOwnProperty("data")) {

          if (indata.status.code == 10000) {
            $rootScope.globalData.isLoginState = true;
            if (!!indata.data && indata.data.hasOwnProperty('name')) {
              $rootScope.globalData.currentUserName = indata.data.name;
            }

            //如果登录成功,则跳转到网站main页
            $state.go("index.main");

          } else {
            $rootScope.globalData.isLoginState = false;
          }
          //请求成功提示
          notify({
            message: indata.status.message,
            position: $rootScope.globalData.notify_position,
            duration: $rootScope.globalData.notify_duration
          });

          console.log('接口返回成功', angular.toJson(indata.data));
        }

      }, function (rejection) {
        //请求错误提示
        notify({
          message: rejection,
          position: $rootScope.globalData.notify_position,
          duration: $rootScope.globalData.notify_duration
        });
        console.log('接口返回失败,失败数据' + angular.toJson(rejection));

      });

    }


  });

