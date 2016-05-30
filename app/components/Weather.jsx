var React = require("react");

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
    isLoading:false,
    errorMessage: undefined
    }
  },

  handleSearch: function(location){
    var self = this;

    this.setState({
      isLoading:true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        isLoading:false,
        location:location,
        temp:temp

      });
    },function(e){
      self.setState({
        isLoading:false,
        errorMessage: e.message
      });

    });

  },



    render: function(){
      var {isLoading, temp, location, errorMessage} = this.state;

      var renderMessage = function(){
        if(isLoading){
            return <h3> getting weather</h3>
        }else if (temp && location){
          return  <WeatherMessage temp={temp} location={location} />
        }
      };

      var renderError = function(){
        if(typeof errorMessage === 'string'){
          return(
            <ErrorModal message={errorMessage}/>
          )
        }
      };

      return(
        <div>
          <h1 className="text-center"> Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}

        </div>

      );
    }
});

module.exports = Weather;
