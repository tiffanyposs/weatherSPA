//SERVICE
weatherApp.service('cityService', function() {
    this.city = "New York";
});


weatherApp.service('weatherService', ['$resource', function($resource) {
//  console.log($resource)
  this.GetWeather = function(city, days) {
    
  
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', { callback: 'JSON_CALLBACK'}, {get: { method: 'JSONP'}});

    return weatherAPI.get({
          q: city,
          cnt: days,
          appid: 'a4aee62a7c5daf482e88a320334dd864'
      });

   }
  
}])