//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', 'cityService', function($scope, $log, cityService) {
      $scope.page = "Home";
    
      $scope.city = cityService.city;
      $scope.$watch('city', function(){
           cityService.city = $scope.city; 
      });

}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'cityService', function($scope, $log, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
  
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', { callback: 'JSON_CALLBACK'}, {get: { method: 'JSONP'}});
    
    $scope.weatherResults = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        appid: 'a4aee62a7c5daf482e88a320334dd864'
    });
    
    $log.log($scope.weatherResults);
  
  
    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    }

}]);
