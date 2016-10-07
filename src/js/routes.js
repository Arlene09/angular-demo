  'use strict';

  angular.module('angular_demo')
    .config(function ($stateProvider,
                      $urlRouterProvider) {

        $stateProvider
          .state('index', {
            url: '/index',
            abstract: true,
            templateUrl: 'templates/common/content.html'
          })
          .state('index.login', {
            url: '/login',
            templateUrl: 'templates/auth/login.html',
            controller: 'LoginCtrl'
          })
          .state('index.item-detail', {
            url: '/item-detail',
            params: {
              params: null,
              hiddenParam: 'YES'
            },
            templateUrl: 'templates/content/item-detail.html',
            controller: 'ItemDetailCtrl'
          })
          .state('index.main', {
            url: '/main',
            templateUrl: 'templates/content/main.html',
            controller: 'MainCtrl'
          });



        $urlRouterProvider.otherwise('/index/login');


    });

