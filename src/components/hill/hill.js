import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
import './hill.scss';

import { HILL } from '../../config/constants.js';
import { useSelector } from 'react-redux';

const BackgroundHill = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Hill = ({ left, right }) => {
  const dayTime = useSelector(state => state.app.dayTime);

  const setHill = () => {
    if (left) return HILL[dayTime].leftHill;
    else return HILL[dayTime].rightHill;
  };

  return (
    <BackgroundHill>
      <Bounce left={!!left} right={!!right}>
        <img className={'background-hill-img'} style={{ left, right }} src={setHill()} alt="Hill" />
      </Bounce>
    </BackgroundHill>
  );
};
