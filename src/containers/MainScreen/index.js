import React from 'react';
import './mainScreen.scss';

function MainScreen() {
  return (
    <div className="main-screen-wrapper">
      <div className="screen-weather">
        <div className="screen-weather-icon">
          <img src={require('../../assets/images/icons/sun.png')} />
        </div>
        <div className="screen-weather-info">
          <h2 className="weather-info-location">Kyiv</h2>
          <p className="weather-info-temperature">
            19 °<sup>C</sup>
          </p>
        </div>
      </div>
      <div className="screen-forecast">
        <div className="forecast-item">
          <p className="forecast-date">05 September</p>
          <p className="forecast-precipitations">Rain</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/clouds.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">06 September</p>
          <p className="forecast-precipitations">Cloud-sun</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/sun.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">07 September</p>
          <p className="forecast-precipitations">Cloud</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/rain.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">08 September</p>
          <p className="forecast-precipitations">Sun</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/partly-cloudy-day.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">09 September</p>
          <p className="forecast-precipitations">Rain</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/rain.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">10 September</p>
          <p className="forecast-precipitations">Rain</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/clouds.png')} />
            <p> 15 °</p>
          </div>
        </div>
        <div className="forecast-item">
          <p className="forecast-date">11 September</p>
          <p className="forecast-precipitations">Cloud-sun</p>
          <div className="forecast-temperature">
            <img src={require('../../assets/images/icons/sun.png')} />
            <p> 15 °</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
