import styled from 'styled-components';
import { ScreenSize } from './Variables.js';
import Carousel from 'nuka-carousel';

export const BlurBackgroundStyled = styled.div`
  ${ScreenSize};
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 5;
  &:before {
    position: absolute;
    width: 600px;
    height: 900px;
    top: -25px;
    left: -50px;
    content: '';
    background-size: 100%;
    filter: blur(30px);
    z-index: 3;
    background: ${props => `url(${props.theme.backgroundImage}) center no-repeat`};
  }
`;

export const AppStyled = styled.div`
  position: relative;
  overflow: hidden;
`;

export const EagleStyled = styled.img`
  width: 80px;
  position: absolute;
  top: 80px;
  right: -100px;
  z-index: 1;
`;
