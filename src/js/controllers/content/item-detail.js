'use strict';

angular.module('angular_demo.controllers')
  .controller('ItemDetailCtrl', function ($scope, 
                                          $stateParams) {

    console.log('enter ItemDetailCtrl');

    var inParams = $scope.inParams = angular.fromJson($stateParams.params);
    console.log('inParams is ' + inParams);

    $scope.data = {
      itemDetail: {},
      isShowItemDesc: false,
      btnTip: '查看描述'
    };

    $scope.action = {};

    $scope.action.isShowItemDesc = function () {
      $scope.data.isShowItemDesc = !$scope.data.isShowItemDesc;
      $scope.data.btnTip = $scope.data.isShowItemDesc ? '隐藏描述' : '查看描述';
    };

    //获取详情
    function getItemDetail() {
      //(前端写的假数据)
      var ListData = [
        {id: '111', content: '哈哈哈哈哈哈哈哈哈哈哈', desc: '大笑'},
        {id: '222', content: '嘻嘻嘻嘻嘻', desc: '偷笑'},
        {id: '333', content: '嘿嘿嘿嘿嘿嘿', desc: '嘚瑟的笑'}
      ];

      for (var i = 0; i < ListData.length; i++) {

        if (ListData[i].id == inParams.id) {

          $scope.data.itemDetail.id = ListData[i].id;
          $scope.data.itemDetail.content = ListData[i].content;
          $scope.data.itemDetail.desc = ListData[i].desc;

        }
      }
    }

    getItemDetail();


  });
