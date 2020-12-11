import styled from 'styled-components';

export const ScreenForecastStyled = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const ForecastItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 125px;
  @media screen and (max-width: 425px) {
    min-width: 100px;
  }
`;

export const ForecastDateStyled = styled.p`
  font-weight: 200;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const ForecastPrecipitationsStyled = styled.p`
  text-transform: capitalize;
  font-size: 20px;
  margin: 8px 0;
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const ForecastTemperatureStyled = styled.div`
  display: flex;
  align-items: flex-end;
  height: 30px;
`;

export const ForecastTemperatureIconStyled = styled.img`
  width: 40px;
  margin-right: 7px;
  @media screen and (max-width: 425px) {
    width: 30px;
  }
`;

export const ForecastTemperatureTempStyled = styled.p`
  font-size: 32px;
  line-height: 20px;
  font-weight: 300;
  @media screen and (max-width: 425px) {
    font-size: 26px;
    line-height: 14px;
  }
`;
