import React from 'react';

import { MAX_ICON_NAME_LENGTH } from '../../config/constants.js';

import './forecast.scss';

function Forecast({ forecast }) {
  const formatDate = date => {
    const currentDate = new Date(date * 1000);
    const options = { day: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('en-GB', options);
  };

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
            return (
              <div className="forecast-item" key={index}>
                <p className="forecast-date">{formatDate(item.time)}</p>
                <p className="forecast-precipitations">{formatPrecipitationsIcon(item.icon)}</p>
                <div className="forecast-temperature">
                  <img src={require(`../../assets/images/icons/${item.icon}.png`)} alt="icon" />
                  <p> {Math.round(item.apparentTemperatureMax)} °</p>
                </div>
              </div>
            );
          })
        : 'Loading...'}
    </div>
  );
}

export default Forecast;
