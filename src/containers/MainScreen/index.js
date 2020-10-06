import React from 'react';
import Forecast from '../../components/Forecast';

import { DEFAULT_CITY_NAME } from '../../config/constants.js';

import './mainScreen.scss';

function MainScreen({ currentWeather, forecast }) {
  const { icon, name } = currentWeather;
  return (
    <div className="main-screen-wrapper">
      <div className="screen-weather">
        <div className="screen-weather-icon">
          <img src={require(`../../assets/images/icons/${icon}.png`)} alt="icon" />
        </div>
        <div className="screen-weather-info">
          <h2 className="weather-info-location">{name ? name : DEFAULT_CITY_NAME}</h2>
          <p className="weather-info-temperature">
            {Math.round(currentWeather.apparentTemperature)} °<sup>C</sup>
          </p>
        </div>
      </div>
      <Forecast forecast={forecast} />
    </div>
  );
}

export default MainScreen;
