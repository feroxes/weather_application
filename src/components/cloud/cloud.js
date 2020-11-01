import React from 'react';
import './cloud.scss';
import { useSelector } from 'react-redux';

export const Cloud = ({ top, left, right }) => {
  const dayTime = useSelector(state => state.app.dayTime);

  return <div className={`cloud cloud-${dayTime}`} style={{ top, left, right }} />;
};
