import styled from 'styled-components';
import { Colors } from '../../assets/styles/Variables.js';
import { ScreenSize } from '../../assets/styles/Variables.js';

export const MainScreenWrapperStyled = styled.div`
  ${ScreenSize};
  display: flex;
  padding: 30px 30px 60px 30px;
  flex-direction: column;
  justify-content: space-between;
  color: ${Colors.white};
`;

export const ScreenWeatherStyled = styled.div`
  display: flex;
  margin: 30px;
`;

export const ScreenWeatherIconStyled = styled.div`
  height: auto;
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
`;

export const ScreenWeatherInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherInfoLocationStyled = styled.h2`
  font-size: 52px;
  font-weight: 400;
`;

export const WeatherInfoTemperatureStyled = styled.p`
  font-size: 62px;
  font-weight: 300;
  line-height: 36px;
  margin-top: 10px;
`;

export const WeatherInfoTemperatureSupStyled = styled.sup`
  font-size: 34px;
`;
