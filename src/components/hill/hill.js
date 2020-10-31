import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './hill.scss';

import { HILL } from '../../config/constants.js';
import { useSelector } from 'react-redux';

export const Hill = ({ left, right }) => {
  const dayTime = useSelector(state => state.app.dayTime);

  const setHill = () => {
    if (left) return HILL[dayTime].leftHill;
    else return HILL[dayTime].rightHill;
  };

  return (
    <div className={`background-hill`}>
      <Bounce left={!!left} right={!!right}>
        <img style={{ left, right }} src={setHill()} alt="Hill" />
      </Bounce>
    </div>
  );
};
