import styled from 'styled-components';
import { Colors } from '../../assets/styles/Variables.js';

export const DetailsScreenWrapperStyled = styled.div`
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

export const DetailsSectionStyled = styled.section`
  &:not(:first-child) {
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
`;

export const DetailsSectionTitleStyled = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

export const DetailsBlockStyled = styled.div`
  width: 100%;
  display: flex;
`;

export const DetailsIconStyled = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsInfoStyled = styled.div`
  width: 55%;
`;

export const DetailsInfoItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const PrecipitationBlockStyled = styled.div`
  display: flex;
  width: 100%;
`;

export const PrecipitationItemStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PrecipitationItemImgStyled = styled.img`
  margin: 10px 0;
`;

export const WindAndPressureBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MillsStyled = styled.div`
  position: relative;
`;

export const MillBigStyled = styled.img`
  width: 80px;
  position: relative;
`;

export const MillSmallStyled = styled.img`
  width: 50px;
  left: -20px;
`;

export const WindSpeedStyled = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PressureStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
