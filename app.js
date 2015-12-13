// Module
var weatherApp = angular.module('weatherApp', ['ngResource', 'ngRoute']);

// Routes
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});

// Controller
weatherApp.controller('homeContoller', ['$scope', function($scope) {

}]);

weatherApp.controller("forecastContoller", ['$scope', function($scope) {

}]);