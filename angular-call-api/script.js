var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.getRequest = function() {
    console.log("I've been pressed!");
    $http.get("http://localhost:4000/users/"+$scope.userId).then(
      function successCallback(response) {
        $scope.response = response;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };

  $scope.postRequest = function() {
    console.log("Post request Called!");
    $http.post("http://localhost:4000/users",$scope.request).then(
      function successCallback(response) {
        $scope.response = response;
      },
      function errorCallback(response) {
        console.log("Unable to perform Post request");
        console.log(response.data.message);
        alert(response.data.message);
        $scope.response = response.data.message;
      }
    );
  };

});