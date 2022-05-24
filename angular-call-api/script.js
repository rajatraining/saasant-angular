var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
  $scope.home = "This is the homepage";

  $scope.getRequest = function() {
    console.log("I've been pressed!");
    $http.get("http://localhost:4000/users").then(
      function successCallback(response) {
        $scope.response = response;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );
  };
});