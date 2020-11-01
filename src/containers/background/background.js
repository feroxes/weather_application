import React from 'react';
import { useSelector } from 'react-redux';
import Bounce from 'react-reveal/Bounce';

import { Hill } from '../../components/hill/hill.js';
import { Cloud } from '../../components/cloud/cloud.js';
import './background.scss';

export const Background = ({ children }) => {
  const dayTime = useSelector(state => state.app.dayTime);
  const cloudPosition = [
    { top: '5vh', right: '75vw' },
    { top: '3vh', right: '6vw' },
    { top: '15vw', right: '15vw' }
  ];

  return (
    <div className={`background-wrapper background-${dayTime}`}>
      <Bounce top>
        {cloudPosition.map((pos, i) => {
          return <Cloud top={pos.top} right={pos.right} key={i} />;
        })}
      </Bounce>
      <Hill left="-20px" />
      <Hill right="-20px" />
      {children}
    </div>
  );
};
