import { SET_FORECAST, LOAD_DATA } from './types.js';

export const setForecast = data => {
  return {
    type: SET_FORECAST,
    payload: data
  };
};

export const loadData = data => {
  return {
    type: LOAD_DATA,
    payload: data
  };
};
