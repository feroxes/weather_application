import styled from 'styled-components';
import { ScreenSize } from './Variables.js';

export const BlurBackground = styled.div`
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
