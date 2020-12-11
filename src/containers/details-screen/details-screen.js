import React from 'react';
import { useSelector } from 'react-redux';

import {
  DetailsScreenWrapperStyled,
  DetailsSectionTitleStyled,
  DetailsBlockStyled,
  DetailsIconStyled,
  DetailsInfoStyled,
  DetailsInfoItemStyled,
  PrecipitationBlockStyled,
  PrecipitationItemStyled,
  PrecipitationItemImgStyled,
  WindAndPressureBlockStyled,
  MillsStyled,
  MillBigStyled,
  MillSmallStyled,
  WindSpeedStyled,
  PressureStyled,
  DetailsSectionStyled
} from './styled.js';
import { BlurBackgroundStyled } from '../../assets/styles/App.js';
import { SLOW_WIND_SPEED, MEDIUM_WIND_SPEED, IMAGES } from '../../config/constants.js';

export const DetailsScreen = () => {
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
    if (windSpeed <= SLOW_WIND_SPEED) return IMAGES.wind_mill.windmillSlow;
    else if (windSpeed > SLOW_WIND_SPEED && windSpeed <= MEDIUM_WIND_SPEED)
      return IMAGES.wind_mill.windmillMid;
    else if (windSpeed > MEDIUM_WIND_SPEED) return IMAGES.wind_mill.windmillFast;
  };

  return (
    <BlurBackgroundStyled>
      <DetailsScreenWrapperStyled>
        <DetailsSectionStyled>
          <DetailsSectionTitleStyled>Details</DetailsSectionTitleStyled>
          <p>{summary}</p>
          <DetailsBlockStyled>
            <DetailsIconStyled>
              <img src={IMAGES.icons(icon)} alt="Weather icon" />
            </DetailsIconStyled>
            <DetailsInfoStyled>
              <DetailsInfoItemStyled>
                <p>Humidity</p>
                <span>{Math.round(humidity * 100)} %</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>Cloudiness</p>
                <span>{Math.round(cloudCover * 100)} %</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>Visibility</p>
                <span>{Math.round(visibility)} km</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>UV Index</p>
                <span>{uvIndex}</span>
              </DetailsInfoItemStyled>
            </DetailsInfoStyled>
          </DetailsBlockStyled>
        </DetailsSectionStyled>
        <DetailsSectionStyled>
          <DetailsSectionTitleStyled>Precipitation</DetailsSectionTitleStyled>
          <PrecipitationBlockStyled>
            <PrecipitationItemStyled>
              <p>Morning</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>Midday</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>Evening</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>Night</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
          </PrecipitationBlockStyled>
        </DetailsSectionStyled>
        <DetailsSectionStyled>
          <DetailsSectionTitleStyled>Wind & Pressure</DetailsSectionTitleStyled>
          <WindAndPressureBlockStyled>
            <MillsStyled>
              <MillBigStyled src={setMillSpeed()} alt="Mill" />
              <MillSmallStyled src={setMillSpeed()} alt="Mill" />
              <WindSpeedStyled>{windSpeed} mps</WindSpeedStyled>
            </MillsStyled>
            <PressureStyled>
              <p>Barometer</p>
              <span>{pressure} inches</span>
            </PressureStyled>
          </WindAndPressureBlockStyled>
        </DetailsSectionStyled>
      </DetailsScreenWrapperStyled>
    </BlurBackgroundStyled>
  );
};
