import { SET_FORECAST, SET_CURRENT_WEATHER, LOAD_DATA } from './types.js';

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

export const loadData = () => {
  return {
    type: LOAD_DATA
  };
};
