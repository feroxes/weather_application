import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../../assets/styles/Variables.js';
import Zoom from 'react-reveal/Bounce';
import { DAY_TIME } from '../../config/constants.js';

const ScreenWrapperStyled = styled.div`
  ${ScreenSize};
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => `url(${props.theme.backgroundImage}) center no-repeat;`};
  background-size: 100%;
`;

const Star = styled.div(props => ({
  position: 'absolute',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  top: '110px',
  right: '50px',
  ...props.theme.star
}));

const InsideCircle = styled.div`
  display: ${props => (props.theme.name === DAY_TIME.Day ? 'block' : 'none')};
  width: 115px;
  height: 115px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(8px);
`;

export const ScreenWrapper = ({ children }) => {
  return (
    <ScreenWrapperStyled>
      <Zoom>
        <Star>
          <InsideCircle />
        </Star>
      </Zoom>
      {children}
    </ScreenWrapperStyled>
  );
};
