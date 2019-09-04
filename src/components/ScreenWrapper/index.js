import React from 'react';
import './screenWrapper.scss';

function ScreenWrapper({ dayTime, children }) {
  return (
    <div className={`screen-wrapper screen-wrapper-${dayTime}`}>
      {/*<div className={`star star-${dayTime}`}/>*/}
      {children}
    </div>
  );
}

export default ScreenWrapper;
