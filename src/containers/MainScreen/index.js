import React from 'react';
import './mainScreen.scss';

function MainScreen({ currentWeather, forecast }) {
  const formatDate = date => {
    const currentDate = new Date(date * 1000);
    const options = { day: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('en-GB', options);
  };

  const formatPrecipitationsType = icon => {
    if (!icon) return ' ';
    else {
      let precipitations = icon.replace(/-/g, ' ');
      if (precipitations.split(' ').length === 3) {
        let lastIndex = precipitations.lastIndexOf(' ');
        precipitations = precipitations.substring(0, lastIndex);
      }
      return precipitations;
    }
  };

  const { icon } = currentWeather;
  return (
    <div className="main-screen-wrapper">
      <div className="screen-weather">
        <div className="screen-weather-icon">
          <img src={require(`../../assets/images/icons/${icon}.png`)} alt="icon" />
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
                  <p className="forecast-precipitations">{formatPrecipitationsType(item.icon)}</p>
                  <div className="forecast-temperature">
                    <img src={require(`../../assets/images/icons/${item.icon}.png`)} alt="icon" />
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
