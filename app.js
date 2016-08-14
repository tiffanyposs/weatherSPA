//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    });

    
});

weatherApp.controller('homeController', ['$scope', '$log', function($scope, $log) {
      $scope.page = "Home";
//    $scope.person = {
//        name: 'John',
//        address: '555 Main Street',
//        city: 'Sunnyville',
//        state: 'CA',
//        zipcode: '90210'
//    }
//    
//    $scope.formattedAddress = function(person) {
//        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zipcode;
//    }
}]);


weatherApp.controller('forecastController', ['$scope', '$log', function($scope, $log) {
      $scope.page = "Forecast"
//    $scope.person = {
//        name: 'John',
//        address: '555 Main Street',
//        city: 'Sunnyville',
//        state: 'CA',
//        zipcode: '90210'
//    }
//    
//    $scope.formattedAddress = function(person) {
//        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zipcode;
//    }
}]);
