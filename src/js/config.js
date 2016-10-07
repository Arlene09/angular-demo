  'use strict';
  angular.module('angular_demo')
    .config(function ($httpProvider) {

      //API统一为JSON格式
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
      
      
      $httpProvider.interceptors.push(function ($q) {
        return {
          'request': function (config) {

            if (config.hasOwnProperty("headers") && config.headers.hasOwnProperty("token")) {
              //为所有发出请求的接口都带上token(token从后台获取到,存入本地)
              config.headers.token = 'XXXX';
            }
            return config;
          },

          'response': function (response) {
            if (!!response.data && response.data.hasOwnProperty('status')
              && response.data.status.hasOwnProperty('code') && response.data.status.code == 10000) {
              return response;
            } else if (!!response.data && response.data.hasOwnProperty('status')
              && response.data.status.hasOwnProperty('code') && response.data.status.code != 10000) {
              return $q.reject(response.data.status.message);
            } else {
              return response;
            }

          },

          'responseError': function (response) {
            switch (response.status) {
              case 400:
              {
                console.error("服务器返回: 400");
                return $q.reject("网络不畅");
              }
              case 401:
              {
                console.error("服务器返回: 401" + angular.toJson(response));
                return $q.reject(response.data.status.message);
              }
              case 403:
              {
                console.error("服务器返回: 403");
                return $q.reject(response.data.status.message);
              }
              case 404:
              {
                console.error("服务器返回: 404");
                return $q.reject("网络不畅");
              }
              case 500:
              {
                return $q.reject("网络不畅");
              }
              default:
                return $q.reject("网络不畅");
            }

          }
        };
      });

    });


