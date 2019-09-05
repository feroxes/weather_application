import React from 'react';
import './mainScreen.scss';

// MAP_CONDITION = {
//     'clear-day': 'sunny',
//     'clear-night': 'clear-night',
//     'rain': 'rainy',
//     'snow': 'snowy',
//     'sleet': 'snowy-rainy',
//     'wind': 'windy',
//     'fog': 'fog',
//     'cloudy': 'cloudy',
//     'partly-cloudy-day': 'partlycloudy',
//     'partly-cloudy-night': 'partlycloudy',
//     'hail': 'hail',
//     'thunderstorm': 'lightning',
//     'tornado': None,
// }

function MainScreen({ currentWeather, forecast }) {
  const formatDate = date => {
    const currentDate = new Date(date);
    const options = { day: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('en-GB', options);
  };
  return (
    <div className="main-screen-wrapper">
      <div className="screen-weather">
        <div className="screen-weather-icon">
          <img src={require('../../assets/images/icons/sun.png')} alt="icon" />
        </div>
        <div className="screen-weather-info">
          <h2 className="weather-info-location">Kyiv</h2>
          <p className="weather-info-temperature">
            {Math.round(currentWeather.apparentTemperature)} °<sup>C</sup>
          </p>
        </div>
      </div>
      <div className="screen-forecast">
        {forecast
          ? forecast.map((item, index) => {
              return (
                <div className="forecast-item" key={index}>
                  <p className="forecast-date">{formatDate(item.time)}</p>
                  <p className="forecast-precipitations">{item.precipType}</p>
                  <div className="forecast-temperature">
                    <img src={require('../../assets/images/icons/clouds.png')} alt="icon" />
                    <p> {Math.round(item.apparentTemperatureMax)} °</p>
                  </div>
                </div>
              );
            })
          : 'Loading...'}
      </div>
    </div>
  );
}

export default MainScreen;
