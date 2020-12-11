import styled from 'styled-components';

export const LoadingSpinnerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
`;

export const LoadingSpinnerImgStyled = styled.img`
  width: 150px;
`;

export const LoadingSpinnerHeaderStyled = styled.h2`
  font-size: 24px;
`;
