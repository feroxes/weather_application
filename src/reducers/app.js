import {
  INIT_APP,
  SET_APP_STATE,
  SET_SELECTED_CITY,
  SET_ACTIVE_LANGUAGE
} from '../actions/types.js';
import { APP_STATES, DEFAULT_CITY, DAY_TIME, SUPPORTED_LANGUAGES } from '../config/constants.js';

const initialState = {
  appState: APP_STATES.Created,
  selectedCity: DEFAULT_CITY,
  dayTime: DAY_TIME.Day,
  activeLanguage: null,
  supportedLanguages: SUPPORTED_LANGUAGES
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return {
        ...state,
        dayTime: payload.dayTime,
        activeLanguage: payload.activeLanguage
      };
    case SET_APP_STATE:
      return {
        ...state,
        appState: payload
      };
    case SET_SELECTED_CITY:
      return {
        ...state,
        selectedCity: payload
      };
    case SET_ACTIVE_LANGUAGE:
      return {
        ...state,
        activeLanguage: payload
      };
    default:
      return state;
  }
};
