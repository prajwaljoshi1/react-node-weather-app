var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=394ef7dbb8858c89092abbe2d9be9e47&units=metric';

module.exports = {

  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message)
      }else{
         return response.data.main.temp;
      }
    },function(response){
        throw new Error(response.data.message);
    });

  }
};


//394ef7dbb8858c89092abbe2d9be9e47
