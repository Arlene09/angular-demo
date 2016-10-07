  'use strict';

  angular.module('angular_demo.services')
    .factory('AngularDemoResource', function ($resource,
                                              ApiConfig) {

      var API_HOST = ApiConfig.API_HOST;

      //系统初始化
      var Init = $resource(API_HOST + '/init');

      //登录
      var Login = $resource(API_HOST + '/login', {}, {
        'save': {method: 'POST', withCredentials: true}
      });
      
      //退出登录
      var LogOut = $resource(API_HOST + '/logout');


      return {
        Init: Init,
        Login: Login,
        LogOut: LogOut
      };
    });

