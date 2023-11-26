var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.emptyBox = "bi bi-square";
    $scope.checkBox = "bi bi-check2-square";

    let playedDate = localStorage.getItem("date");
    let today = new Date();
    today = today.toISOString().replace(/T.*/gi, '');
    if (!playedDate || playedDate != today) {
        localStorage.setItem("date", today);
        localStorage.setItem("played", JSON.stringify([false, false, false, false, false, false]));
    } else {
        $scope.playedStatus = JSON.parse(localStorage.getItem("played"))
    }
    $scope.games = [{
        name: "Framed",
        gameUrl: "https://framed.wtf"
    },
    {
        name: "La palabra del día",
        gameUrl: "https://wordle.danielfrg.com"
    },
    {
        name: "El mot del dia",
        gameUrl: "https://gelozp.com/games/wordle/"
    },
    {
        name: "Wordle",
        gameUrl: "https://nytimes.com/games/wordle/"
    },
    {
        name: "Boludle",
        gameUrl: "https://www.boludle.com"
    },
    {
        name: "Parole",
        gameUrl: "https://pietroppeter.github.io/wordle-it/"
    },
    {
        name: "Numble",
        gameUrl: "https://numble.wtf"
    }
    ]
    $scope.handleClick = function (index) {
        $scope.playedStatus[index] = true;
        localStorage.setItem("played", JSON.stringify($scope.playedStatus));
        window.location.href = $scope.games[index]["gameUrl"];
    }
});