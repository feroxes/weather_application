import React from 'react';
import { LoadingSpinnerStyled, LoadingSpinnerImgStyled, LoadingSpinnerHeaderStyled } from './styled.js';
import { IMAGES } from '../../config/constants.js';

export const LoadingSpinner = () => {
  return (
    <>
      <LoadingSpinnerStyled>
        <LoadingSpinnerImgStyled src={IMAGES.eagle} alt="Eagle" />
        <LoadingSpinnerHeaderStyled>Loading...</LoadingSpinnerHeaderStyled>
      </LoadingSpinnerStyled>
    </>
  );
};
