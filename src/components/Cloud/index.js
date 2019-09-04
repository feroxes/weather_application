import React from 'react';
import './cloud.scss';

function Cloud({ dayTime, top, left, right }) {
  return <div className={`cloud cloud-${dayTime}`} style={{ top, left, right }} />;
}
export default Cloud;
