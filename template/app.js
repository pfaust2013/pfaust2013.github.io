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

        .when('/page2', {
            templateUrl: 'pages/page2.html',  // route for 2ed page
            controller: 'pg2Controller'
        })

        .when('/page3', {
            templateUrl: 'pages/page3.html',  // route for page 3
            controller: 'pg3Controller'
        })

        .otherwise({
            redirectTo: 'pages/home.html'   // other URLs goes to home
        });
});

/*   a controller for each page  */

app.controller('mainController', function ($scope) {
    $scope.message = 'This is the main page content.';
});

app.controller('pg2Controller', function ($scope) {
    $scope.message = 'This is the content for page 2.';
});

app.controller('pg3Controller', function ($scope) {
    $scope.message = 'Page 3 content would go here.';
});