import styled from 'styled-components';
import { Colors } from '../../assets/styles/Variables.js';

export const DetailsScreenWrapper = styled.div`
  z-index: 3;
  padding: 40px;
  color: ${Colors.white};
  font-size: 18px;
  font-weight: 300;
  @media screen and (max-width: 425px) {
    padding: 20px;
    font-size: 14px;
  }
`;

export const DetailsSection = styled.section`
  &:not(:first-child) {
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const DetailsSectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const DetailsBlock = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsIcon = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsInfo = styled.div`
  width: 55%;
`;

export const DetailsInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const PrecipitationBlock = styled.div`
  display: flex;
  width: 100%;
`;

export const PrecipitationItem = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PrecipitationItemImg = styled.img`
  margin: 10px 0;
`;

export const WindAndPressureBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Mills = styled.div`
  position: relative;
`;

export const MillBig = styled.img`
  width: 80px;
  position: relative;
`;

export const MillSmall = styled.img`
  width: 50px;
  left: -20px;
`;

export const WindSpeed = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Pressure = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
