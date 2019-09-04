import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './hill.scss';

function Hill({ dayTime, left, right }) {
  const setHill = () => {
    const leftHillDay = require('../../assets/images/background/left-hill-day.png');
    const leftHillNight = require('../../assets/images/background/left-hill-night.png');
    const rightHillDay = require('../../assets/images/background/right-hill-day.png');
    const rightHillNight = require('../../assets/images/background/right-hill-night.png');

    if (dayTime === 'day') {
      if (left) {
        return leftHillDay;
      } else return rightHillDay;
    } else {
      if (left) {
        return leftHillNight;
      } else return rightHillNight;
    }
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
