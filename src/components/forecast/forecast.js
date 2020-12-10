import React from 'react';
import { useSelector } from 'react-redux';

import { formatDate, formatPrecipitationsIcon } from '../../helper/helper.js';
import {
  ScreenForecast,
  ForecastItem,
  ForecastDate,
  ForecastPrecipitations,
  ForecastTemperature,
  ForecastTemperatureIcon,
  ForecastTemperatureTemp
} from './styled.js';

export const Forecast = () => {
  const forecast = useSelector(state => state.forecast.forecast);
  return (
    <ScreenForecast>
      {forecast.map((item, index) => {
        const { time, icon, apparentTemperatureMax } = item;
        return (
          <ForecastItem key={index}>
            <ForecastDate>{formatDate(time)}</ForecastDate>
            <ForecastPrecipitations>{formatPrecipitationsIcon(icon)}</ForecastPrecipitations>
            <ForecastTemperature>
              <ForecastTemperatureTemp>
                {' '}
                {Math.round(apparentTemperatureMax)} °
              </ForecastTemperatureTemp>
              <ForecastTemperatureIcon
                src={require(`../../assets/images/icons/${icon}.png`)}
                alt="icon"
              />
            </ForecastTemperature>
          </ForecastItem>
        );
      })}
    </ScreenForecast>
  );
};
