var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.addFav = function(id) {
        if (localStorage.getItem("myFavs")) {
            let old = JSON.parse(localStorage.getItem("myFavs"));
            myFavs.push(id);
            localStorage.setItem("myFavs", JSON.stringify(old));            
        } else {
            let newItem = [id];
            localStorage.setItem("myFavs", JSON.stringify(newItem));            
        }
        alert(id);
    }
  $http.get("schedule.json")
  .then(function (response) {
      $scope.schedule = response.data;
      $scope.jueves = $scope.schedule.filter((val)=> val["day"] == 4)
      $scope.viernes = $scope.schedule.filter((val)=> val["day"] == 5)
      $scope.sabado = $scope.schedule.filter((val)=> val["day"] == 6)
      $scope.jueves.sort((a, b)=> new Date(a.datetime) - new Date(b.datetime))
      $scope.viernes.sort((a, b)=> new Date(a.datetime) - new Date(b.datetime))
      $scope.sabado.sort((a, b)=> new Date(a.datetime) - new Date(b.datetime))
      console.log("jueves", $scope.jueves)
      console.log("viernes", $scope.viernes)
      console.log("sabado", $scope.sabado)
  })
});
