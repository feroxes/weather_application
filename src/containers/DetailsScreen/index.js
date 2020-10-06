import React from 'react';
import './detailsScreen.scss';

import { SLOW_WIND_SPEED, MEDIUM_WIND_SPEED, WIND_MILL } from '../../config/constants.js';

function DetailsScreen({ dayTime, currentWeather }) {
  const {
    cloudCover,
    humidity,
    icon,
    pressure,
    summary,
    uvIndex,
    visibility,
    windSpeed
  } = currentWeather;

  const setMillSpeed = () => {
    if (windSpeed <= SLOW_WIND_SPEED) return WIND_MILL.windmillSlow;
    else if (windSpeed > SLOW_WIND_SPEED && windSpeed <= MEDIUM_WIND_SPEED)
      return WIND_MILL.windmillMid;
    else if (windSpeed > MEDIUM_WIND_SPEED) return WIND_MILL.windmillFast;
  };

  return (
    <div className={`blur-background blur-background-${dayTime}`}>
      <div className="details-screen-wrapper">
        <section className="details-section">
          <h2 className="details-section-title">Details</h2>
          <p>{summary}</p>
          <div className="details-block">
            <div className="details-icon">
              <img src={require(`../../assets/images/icons/${icon}.png`)} alt="Weather icon" />
            </div>
            <div className="details-info">
              <div className="details-info-item">
                <p>Humidity</p>
                <span>{Math.round(humidity * 100)} %</span>
              </div>
              <div className="details-info-item">
                <p>Cloudiness</p>
                <span>{Math.round(cloudCover * 100)} %</span>
              </div>
              <div className="details-info-item">
                <p>Visibility</p>
                <span>{Math.round(visibility)} km</span>
              </div>
              <div className="details-info-item">
                <p>UV Index</p>
                <span>{uvIndex}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-section-title">Precipitation</h2>
          <div className="precipitation-block">
            <div className="precipitation-item">
              <p>Morning</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Midday</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Evening</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
            <div className="precipitation-item">
              <p>Night</p>
              <img src={require('../../assets/images/icons/drop.png')} alt="Drop icon" />
              <span>0 %</span>
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-section-title">Wind & Pressure</h2>
          <div className="wind-and-pressure-block">
            <div className="mills">
              <img className="mill-big" src={setMillSpeed()} alt="Mill" />
              <img className="mill-small" src={setMillSpeed()} alt="Mill" />
              <p className="wind-speed">{windSpeed} mps</p>
            </div>
            <div className="pressure">
              <p>Barometer</p>
              <span>{pressure} inches</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailsScreen;
