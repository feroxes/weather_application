import React from 'react';
import { useSelector } from 'react-redux';
import Zoom from 'react-reveal/Bounce';

import './screen-wrapper.scss';

export const ScreenWrapper = ({ children }) => {
  const dayTime = useSelector(state => state.app.dayTime);

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
};
