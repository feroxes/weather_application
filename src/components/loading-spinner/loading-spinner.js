import React from 'react';
import { LoadingSpinnerStyled, LoadingSpinnerImg, LoadingSpinnerHeader } from './styled.js';
import { IMAGES } from '../../config/constants.js';

export const LoadingSpinner = () => {
  return (
    <>
      <LoadingSpinnerStyled>
        <LoadingSpinnerImg src={IMAGES.eagle} alt="Eagle" />
        <LoadingSpinnerHeader>Loading...</LoadingSpinnerHeader>
      </LoadingSpinnerStyled>
    </>
  );
};
