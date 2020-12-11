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

import { Lsv } from '../../Lsv.js';
import { getLsv } from '../../helper/helper.js';
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
          <DetailsSectionTitleStyled>{getLsv(Lsv.detailScreen.details)}</DetailsSectionTitleStyled>
          <p>{summary}</p>
          <DetailsBlockStyled>
            <DetailsIconStyled>
              <img src={IMAGES.icons(icon)} alt="Weather icon" />
            </DetailsIconStyled>
            <DetailsInfoStyled>
              <DetailsInfoItemStyled>
                <p>{getLsv(Lsv.detailScreen.humidity)}</p>
                <span>{Math.round(humidity * 100)} %</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>{getLsv(Lsv.detailScreen.cloudiness)}</p>
                <span>{Math.round(cloudCover * 100)} %</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>{getLsv(Lsv.detailScreen.visibility)}</p>
                <span>{Math.round(visibility)} km</span>
              </DetailsInfoItemStyled>
              <DetailsInfoItemStyled>
                <p>{getLsv(Lsv.detailScreen.uvIndex)}</p>
                <span>{uvIndex}</span>
              </DetailsInfoItemStyled>
            </DetailsInfoStyled>
          </DetailsBlockStyled>
        </DetailsSectionStyled>
        <DetailsSectionStyled>
          <DetailsSectionTitleStyled>{getLsv(Lsv.detailScreen.precipitation)}</DetailsSectionTitleStyled>
          <PrecipitationBlockStyled>
            <PrecipitationItemStyled>
              <p>{getLsv(Lsv.detailScreen.morning)}</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>{getLsv(Lsv.detailScreen.midday)}</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>{getLsv(Lsv.detailScreen.evening)}</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
            <PrecipitationItemStyled>
              <p>{getLsv(Lsv.detailScreen.night)}</p>
              <PrecipitationItemImgStyled src={IMAGES.icons('drop')} alt="Drop icon" />
              <span>0 %</span>
            </PrecipitationItemStyled>
          </PrecipitationBlockStyled>
        </DetailsSectionStyled>
        <DetailsSectionStyled>
          <DetailsSectionTitleStyled>{getLsv(Lsv.detailScreen.windPressure)}</DetailsSectionTitleStyled>
          <WindAndPressureBlockStyled>
            <MillsStyled>
              <MillBigStyled src={setMillSpeed()} alt="Mill" />
              <MillSmallStyled src={setMillSpeed()} alt="Mill" />
              <WindSpeedStyled>{windSpeed} {getLsv(Lsv.detailScreen.mps)}</WindSpeedStyled>
            </MillsStyled>
            <PressureStyled>
              <p>{getLsv(Lsv.detailScreen.barometer)}</p>
              <span>{pressure} {getLsv(Lsv.detailScreen.inches)}</span>
            </PressureStyled>
          </WindAndPressureBlockStyled>
        </DetailsSectionStyled>
      </DetailsScreenWrapperStyled>
    </BlurBackgroundStyled>
  );
};
