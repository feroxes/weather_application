import React from 'react';
import Bounce from 'react-reveal/Bounce';

import { BackgroundWrapperStyled } from './styled.js';
import { Hill } from '../../components/hill/hill.js';
import { Cloud } from '../../components/cloud/cloud.js';

export const Background = ({ children }) => {
  const cloudPositions = [
    { top: '5vh', right: '75vw' },
    { top: '3vh', right: '6vw' },
    { top: '15vw', right: '15vw' }
  ];

  return (
    <BackgroundWrapperStyled>
      <Bounce top>
        {cloudPositions.map((pos, i) => {
          return <Cloud top={pos.top} right={pos.right} key={i} />;
        })}
      </Bounce>
      <Hill left="-20px" />
      <Hill right="-20px" />
      {children}
    </BackgroundWrapperStyled>
  );
};
