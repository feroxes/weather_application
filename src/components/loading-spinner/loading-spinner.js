import React from 'react';

import './loading-spinner.scss';

export const LoadingSpinner = () => {
  return (
    <>
      <div className={'loading-spinner'}>
        <img src={require('../../assets/images/screen/eagle.gif')} alt="Eagle" />
        <h2>Loading...</h2>
      </div>
    </>
  );
};
