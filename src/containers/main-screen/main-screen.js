import React from 'react';
import { useSelector } from 'react-redux';

import { Forecast } from '../../components/forecast/forecast.js';

import './main-screen.scss';

export const MainScreen = () => {
  const currentWeather = useSelector(state => state.forecast.currentWeather);
  const selectedCity = useSelector(state => state.app.selectedCity);

  const { icon, apparentTemperature } = currentWeather;

  return (
    <div className="main-screen-wrapper">
      <div className="screen-weather">
        <div className="screen-weather-icon">
          <img src={require(`../../assets/images/icons/${icon}.png`)} alt="icon" />
        </div>
        <div className="screen-weather-info">
          <h2 className="weather-info-location">{selectedCity.name}</h2>
          <p className="weather-info-temperature">
            {Math.round(apparentTemperature)} °<sup>C</sup>
          </p>
        </div>
      </div>
      <Forecast />
    </div>
  );
};
