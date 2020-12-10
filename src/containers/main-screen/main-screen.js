import React from 'react';
import { useSelector } from 'react-redux';

import { Forecast } from '../../components/forecast/forecast.js';

import {
  MainScreenWrapper,
  ScreenWeather,
  ScreenWeatherIcon,
  ScreenWeatherInfo,
  WeatherInfoLocation,
  WeatherInfoTemperature,
  WeatherInfoTemperatureSup
} from './styled.js';

export const MainScreen = () => {
  const currentWeather = useSelector(state => state.forecast.currentWeather);
  const selectedCity = useSelector(state => state.app.selectedCity);

  const { icon, temperature } = currentWeather;
  return (
    <MainScreenWrapper>
      <ScreenWeather>
        <ScreenWeatherIcon>
          <img src={require(`../../assets/images/icons/${icon}.png`)} alt="icon" />
        </ScreenWeatherIcon>
        <ScreenWeatherInfo>
          <WeatherInfoLocation>{selectedCity.name}</WeatherInfoLocation>
          <WeatherInfoTemperature>
            {Math.round(temperature)} °<WeatherInfoTemperatureSup>C</WeatherInfoTemperatureSup>
          </WeatherInfoTemperature>
        </ScreenWeatherInfo>
      </ScreenWeather>
      <Forecast />
    </MainScreenWrapper>
  );
};
