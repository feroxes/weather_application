import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import './hill.scss';

import { IMAGES } from '../../config/constants.js';
import { useSelector } from 'react-redux';

const BackgroundHillStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Hill = ({ left, right }) => {
  const dayTime = useSelector(state => state.app.dayTime);

  const setHill = () => {
    if (left) return IMAGES.hill[dayTime].leftHill;
    else return IMAGES.hill[dayTime].rightHill;
  };

  return (
    <BackgroundHillStyled>
      <Bounce left={!!left} right={!!right}>
        <img className={'background-hill-img'} style={{ left, right }} src={setHill()} alt="Hill" />
      </Bounce>
    </BackgroundHillStyled>
  );
};
