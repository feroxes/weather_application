import React from 'react';
import './screenWrapper.scss';
import Zoom from 'react-reveal/Bounce';

function ScreenWrapper({ dayTime, children }) {
  return (
    <div className={`screen-wrapper screen-wrapper-${dayTime}`}>
      <Zoom>
        <div className={`star star-${dayTime}`}>
          <div className="inside-circle" />
        </div>
      </Zoom>
      {children}
    </div>
  );
}

export default ScreenWrapper;
