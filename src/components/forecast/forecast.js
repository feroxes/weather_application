import React from 'react';
import { useSelector } from 'react-redux';

import { formatDate } from '../../helper/helper.js';
import { MAX_ICON_NAME_LENGTH } from '../../config/constants.js';
import './forecast.scss';

export const Forecast = () => {
  const forecast = useSelector(state => state.forecast.forecast);

  const formatPrecipitationsIcon = icon => {
    if (!icon) return ' ';
    else {
      const splitedIconName = icon.split('-');
      if (splitedIconName.length > MAX_ICON_NAME_LENGTH) {
        return splitedIconName.splice(0, splitedIconName.length - 1).join(' ');
      } else return splitedIconName.join(' ');
    }
  };

  return (
    <div className="screen-forecast">
      {forecast
        ? forecast.map((item, index) => {
            const { time, icon, apparentTemperatureMax } = item;
            return (
              <div className="forecast-item" key={index}>
                <p className="forecast-date">{formatDate(time)}</p>
                <p className="forecast-precipitations">{formatPrecipitationsIcon(icon)}</p>
                <div className="forecast-temperature">
                  <img src={require(`../../assets/images/icons/${icon}.png`)} alt="icon" />
                  <p> {Math.round(apparentTemperatureMax)} °</p>
                </div>
              </div>
            );
          })
        : 'Loading...'}
    </div>
  );
};
