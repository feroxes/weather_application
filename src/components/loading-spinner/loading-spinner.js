import React from 'react';
import {
  LoadingSpinnerStyled,
  LoadingSpinnerImgStyled,
  LoadingSpinnerHeaderStyled
} from './styled.js';
import { getLsv } from '../../helper/helper.js';
import { Lsv } from '../../Lsv.js';
import { IMAGES } from '../../config/constants.js';

export const LoadingSpinner = () => {
  return (
    <>
      <LoadingSpinnerStyled>
        <LoadingSpinnerImgStyled src={IMAGES.eagle} alt="Eagle" />
        <LoadingSpinnerHeaderStyled>
          {getLsv(Lsv.loadingSpinner.loading)}
        </LoadingSpinnerHeaderStyled>
      </LoadingSpinnerStyled>
    </>
  );
};
