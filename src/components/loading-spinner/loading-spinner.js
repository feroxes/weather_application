import React from 'react';
import { useLsv } from '../../custom-hooks/useLsv.js';

import {
  LoadingSpinnerStyled,
  LoadingSpinnerImgStyled,
  LoadingSpinnerHeaderStyled
} from './styled.js';
import { Lsv } from '../../Lsv.js';
import { IMAGES } from '../../config/constants.js';

export const LoadingSpinner = () => {
  return (
    <>
      <LoadingSpinnerStyled>
        <LoadingSpinnerImgStyled src={IMAGES.eagle} alt="Eagle" />
        <LoadingSpinnerHeaderStyled>
          {useLsv(Lsv.loadingSpinner.loading)}
        </LoadingSpinnerHeaderStyled>
      </LoadingSpinnerStyled>
    </>
  );
};
