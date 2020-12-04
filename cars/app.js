// JavaScript source code
var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',  // route for home page
            controller: 'mainController'
        })

        .when('/home', {
            templateUrl: 'pages/home.html',  // also home page
            controller: 'mainController'
        })

        .when('/dealers', {
            templateUrl: 'pages/dealers.html',  // route for 2ed page
            controller: 'dealerController'
        })

        .when('/all_cars', {
            templateUrl: 'pages/all_cars.html',  // route for page 3
            controller: 'carsController'
        })

        .otherwise({
            redirectTo: 'pages/home.html'   // other URLs goes to home
        });
});

/*   a controller for each page  */

app.controller('mainController', function ($scope) {
    $scope.message = 'We are a locally-owned car online dealership.';
});

app.controller('dealerController', function ($scope, $http) {
    var today = new Date();  /* get today's date */
    $scope.date = today.toDateString()
    $http.get("dealers.json").then(function (response) {
        $scope.dealers = response.data
    });
});

app.controller('carsController', function ($scope, $http) {
    $http.get("cars.json").then(function (response) {
        $scope.cars = response.data
    });
});