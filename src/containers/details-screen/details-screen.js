import React from 'react';
import { useSelector } from 'react-redux';

import {
  DetailsScreenWrapper,
  DetailsSectionTitle,
  DetailsBlock,
  DetailsIcon,
  DetailsInfo,
  DetailsInfoItem,
  PrecipitationBlock,
  PrecipitationItem,
  PrecipitationItemImg,
  WindAndPressureBlock,
  Mills,
  MillBig,
  MillSmall,
  WindSpeed,
  Pressure,
  DetailsSection
} from './styled.js';
import { SLOW_WIND_SPEED, MEDIUM_WIND_SPEED, WIND_MILL } from '../../config/constants.js';

export const DetailsScreen = () => {
  const dayTime = useSelector(state => state.app.dayTime);
  const currentWeather = useSelector(state => state.forecast.currentWeather);

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
      <DetailsScreenWrapper>
        <DetailsSection>
          <DetailsSectionTitle>Details</DetailsSectionTitle>
          <p>{summary}</p>
          <DetailsBlock>
            <DetailsIcon>
              <img src={require(`../../assets/images/icons/${icon}.png`)} alt="Weather icon" />
            </DetailsIcon>
            <DetailsInfo>
              <DetailsInfoItem>
                <p>Humidity</p>
                <span>{Math.round(humidity * 100)} %</span>
              </DetailsInfoItem>
              <DetailsInfoItem>
                <p>Cloudiness</p>
                <span>{Math.round(cloudCover * 100)} %</span>
              </DetailsInfoItem>
              <DetailsInfoItem>
                <p>Visibility</p>
                <span>{Math.round(visibility)} km</span>
              </DetailsInfoItem>
              <DetailsInfoItem>
                <p>UV Index</p>
                <span>{uvIndex}</span>
              </DetailsInfoItem>
            </DetailsInfo>
          </DetailsBlock>
        </DetailsSection>
        <DetailsSection>
          <DetailsSectionTitle>Precipitation</DetailsSectionTitle>
          <PrecipitationBlock>
            <PrecipitationItem>
              <p>Morning</p>
              <PrecipitationItemImg
                src={require('../../assets/images/icons/drop.png')}
                alt="Drop icon"
              />
              <span>0 %</span>
            </PrecipitationItem>
            <PrecipitationItem>
              <p>Midday</p>
              <PrecipitationItemImg
                src={require('../../assets/images/icons/drop.png')}
                alt="Drop icon"
              />
              <span>0 %</span>
            </PrecipitationItem>
            <PrecipitationItem>
              <p>Evening</p>
              <PrecipitationItemImg
                src={require('../../assets/images/icons/drop.png')}
                alt="Drop icon"
              />
              <span>0 %</span>
            </PrecipitationItem>
            <PrecipitationItem>
              <p>Night</p>
              <PrecipitationItemImg
                src={require('../../assets/images/icons/drop.png')}
                alt="Drop icon"
              />
              <span>0 %</span>
            </PrecipitationItem>
          </PrecipitationBlock>
        </DetailsSection>
        <DetailsSection>
          <DetailsSectionTitle>Wind & Pressure</DetailsSectionTitle>
          <WindAndPressureBlock>
            <Mills>
              <MillBig src={setMillSpeed()} alt="Mill" />
              <MillSmall src={setMillSpeed()} alt="Mill" />
              <WindSpeed>{windSpeed} mps</WindSpeed>
            </Mills>
            <Pressure>
              <p>Barometer</p>
              <span>{pressure} inches</span>
            </Pressure>
          </WindAndPressureBlock>
        </DetailsSection>
      </DetailsScreenWrapper>
    </div>
  );
};
