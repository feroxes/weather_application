import React from 'react';
import { useSelector } from 'react-redux';

import { formatDate, formatPrecipitationsIcon } from '../../helper/helper.js';
import { IMAGES } from '../../config/constants.js';
import {
  ScreenForecastStyled,
  ForecastItemStyled,
  ForecastDateStyled,
  ForecastPrecipitationsStyled,
  ForecastTemperatureStyled,
  ForecastTemperatureIconStyled,
  ForecastTemperatureTempStyled
} from './styled.js';

export const Forecast = () => {
  const forecast = useSelector(state => state.forecast.forecast);
  return (
    <ScreenForecastStyled>
      {forecast.map((item, index) => {
        const { time, icon, apparentTemperatureMax } = item;
        return (
          <ForecastItemStyled key={index}>
            <ForecastDateStyled>{formatDate(time)}</ForecastDateStyled>
            <ForecastPrecipitationsStyled>{formatPrecipitationsIcon(icon)}</ForecastPrecipitationsStyled>
            <ForecastTemperatureStyled>
              <ForecastTemperatureTempStyled>
                {' '}
                {Math.round(apparentTemperatureMax)} °
              </ForecastTemperatureTempStyled>
              <ForecastTemperatureIconStyled src={IMAGES.icons(icon)} alt="icon" />
            </ForecastTemperatureStyled>
          </ForecastItemStyled>
        );
      })}
    </ScreenForecastStyled>
  );
};
