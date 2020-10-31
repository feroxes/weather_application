import React from 'react';
import { useSelector } from 'react-redux';
import Bounce from 'react-reveal/Bounce';

import { Hill } from '../../components/hill/hill.js';
import { Cloud } from '../../components/cloud/cloud.js';
import './background.scss';

export const Background = () => {
  const dayTime = useSelector(state => state.app.dayTime);

  return (
    <div className={`background-wrapper background-${dayTime}`}>
      <Bounce top>
        <Cloud top="5vh" left="12vw" />
        <Cloud top="3vh" right="6vw" />
        <Cloud top="15vw" right="15vw" />
      </Bounce>
      <Hill left="-20px" />
      <Hill right="-20px" />
    </div>
  );
};
