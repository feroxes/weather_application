import React from 'react';
import styled from 'styled-components';

const CloudStyled = styled.div`
  width: 12vw;
  height: 12vw;
  border-radius: 100%;
  position: absolute;
  background-color: ${props => props.theme.cloudBackgroundColor};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  &:before {
    content: '';
    display: block;
    width: 9vw;
    height: 9vw;
    border-radius: 100%;
    position: absolute;
    top: 2vw;
    right: 8vw;
    background-color: ${props => props.theme.cloudBackgroundColor};
  }
  &:after {
    content: '';
    display: block;
    width: 9vw;
    height: 9vw;
    border-radius: 100%;
    position: absolute;
    top: 2vw;
    left: 8vw;
    background-color: ${props => props.theme.cloudBackgroundColor};
  }
`;

export const Cloud = ({ top, left, right }) => <CloudStyled top={top} left={left} right={right} />;
