
app.controller('InvoiceCtrl', function ($scope,$http) {

    $http.post('localhost:3000/sendinfo',(data)=>{
        console.log(data);
        $scope.myText(data);
    })

   // $scope.myText="This is my Text";
});
