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

// Services
weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
    
})

// Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller("forecastController", ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

    $scope.city = cityService.city;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=29d2e4711bc2829de4459406bdb6c915", { callback: "JSON_CALLBACK" }, { get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2});
    
    console.log($scope.weatherResult);
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) {
     
        return new Date(dt * 1000);
        
    }
    
}]);