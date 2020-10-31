import { INIT_APP, SET_APP_STATE, SET_SELECTED_CITY } from './types.js';

export const initApp = data => {
  return {
    type: INIT_APP,
    payload: data
  };
};

export const setAppState = data => {
  return {
    type: SET_APP_STATE,
    payload: data
  };
};

export const setSelectedCity = data => {
  return {
    type: SET_SELECTED_CITY,
    payload: data
  };
}