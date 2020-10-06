import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './hill.scss';

import { HILL } from '../../config/constants.js';

function Hill({ dayTime, left, right }) {
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
}

export default Hill;
