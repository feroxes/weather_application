import { INIT_APP, SET_APP_STATE, SET_SELECTED_CITY } from '../actions/types.js';
import { APP_STATES, DEFAULT_CITY } from '../config/constants.js';

const initialState = {
  appState: APP_STATES.Created,
  selectedCity: DEFAULT_CITY,
  dayTime: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return {
        ...state,
        dayTime: payload
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
    default:
      return state;
  }
};
