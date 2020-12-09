import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';

import { Hill } from '../../components/hill/hill.js';
import { Cloud } from '../../components/cloud/cloud.js';

const BackgroundWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background: ${props => props.theme.backgroundWrapper};
`;

export const Background = ({ children }) => {
  const cloudPositions = [
    { top: '5vh', right: '75vw' },
    { top: '3vh', right: '6vw' },
    { top: '15vw', right: '15vw' }
  ];

  return (
    <BackgroundWrapper>
      <Bounce top>
        {cloudPositions.map((pos, i) => {
          return <Cloud top={pos.top} right={pos.right} key={i} />;
        })}
      </Bounce>
      <Hill left="-20px" />
      <Hill right="-20px" />
      {children}
    </BackgroundWrapper>
  );
};
