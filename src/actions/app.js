import { INIT_APP, SET_ACTIVE_LANGUAGE, SET_APP_STATE, SET_SELECTED_CITY } from './types.js';

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
};

export const setActiveLanguage = data => {
  return {
    type: SET_ACTIVE_LANGUAGE,
    payload: data
  };
};
