var invApp = angular.module("invoice", []); // Assiging the angular module object to var invApp


invApp.controller("invCtrl", function ($scope,$rootScope) {
  $scope.orgName = "Saasant Technologies";
  $scope.invNo = Math.floor(Math.random() * 100000000);
  $scope.invDate = new Date();
  $scope.invoice = {
    no: 123123123,
    date: "2022-05-11",
    items: [
      { itemNo: 1, itemDes: "Rice", rate: 100, qty: 5 },
      { itemNo: 2, itemDes: "Milk", rate: 20, qty: 2 }
    ],
  }; // Object

  $scope.update = function(val) {
    $scope.item.size.code = $scope.selectedItem.code
    
 }
  
});
