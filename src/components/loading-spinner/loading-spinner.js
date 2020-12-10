import React from 'react';
import { LoadingSpinnerStyled, LoadingSpinnerImg, LoadingSpinnerHeader } from './styled.js';

export const LoadingSpinner = () => {
  return (
    <>
      <LoadingSpinnerStyled>
        <LoadingSpinnerImg src={require('../../assets/images/screen/eagle.gif')} alt="Eagle" />
        <LoadingSpinnerHeader>Loading...</LoadingSpinnerHeader>
      </LoadingSpinnerStyled>
    </>
  );
};
