import React from 'react';
import { useSelector } from 'react-redux';

import { Forecast } from '../../components/forecast/forecast.js';
import { IMAGES } from '../../config/constants.js';

import {
  MainScreenWrapperStyled,
  ScreenWeatherStyled,
  ScreenWeatherIconStyled,
  ScreenWeatherInfoStyled,
  WeatherInfoLocationStyled,
  WeatherInfoTemperatureStyled,
  WeatherInfoTemperatureSupStyled
} from './styled.js';

export const MainScreen = () => {
  const currentWeather = useSelector(state => state.forecast.currentWeather);
  const selectedCity = useSelector(state => state.app.selectedCity);

  const { icon, temperature } = currentWeather;
  return (
    <MainScreenWrapperStyled>
      <ScreenWeatherStyled>
        <ScreenWeatherIconStyled>
          <img src={IMAGES.icons(icon)} alt="icon" />
        </ScreenWeatherIconStyled>
        <ScreenWeatherInfoStyled>
          <WeatherInfoLocationStyled>{selectedCity.name}</WeatherInfoLocationStyled>
          <WeatherInfoTemperatureStyled>
            {Math.round(temperature)} °<WeatherInfoTemperatureSupStyled>C</WeatherInfoTemperatureSupStyled>
          </WeatherInfoTemperatureStyled>
        </ScreenWeatherInfoStyled>
      </ScreenWeatherStyled>
      <Forecast />
    </MainScreenWrapperStyled>
  );
};
