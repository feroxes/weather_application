import { SET_FORECAST, SET_CURRENT_WEATHER } from './types.js';

export const setForecast = data => {
  return {
    type: SET_FORECAST,
    payload: data
  };
};

export const setCurrentWeather = data => {
  return {
    type: SET_CURRENT_WEATHER,
    payload: data
  };
};
