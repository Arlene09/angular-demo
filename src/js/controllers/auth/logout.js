angular.module('angular_demo.controllers')
  .controller('LogOutCtrl', function ($scope,
                                      AngularDemoResource,
                                      $rootScope,
                                      notify,
                                      $state) {

    $scope.data = {};
    $scope.action = {};

    $scope.action.toLogOut = function () {
      
      //TODO: 3.调用退出登录接口
      //   toLogOut();

      $rootScope.globalData.isLoginState = false;
      $rootScope.globalData.currentUserName = '';
      //请求成功提示
      notify({
        message: '退出登录成功',
        position: $rootScope.globalData.notify_position,
        duration: $rootScope.globalData.notify_duration
      });
      $state.go('index.login');

    };

    // 退出登录接口
    function toLogOut() {

      var logOut = new AngularDemoResource.LogOut();

      logOut.$save().then(function (indata) {

        if (!!indata && indata.hasOwnProperty("data")) {

          $rootScope.globalData.isLoginState = false;

          $rootScope.globalData.currentUserName = '';

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
