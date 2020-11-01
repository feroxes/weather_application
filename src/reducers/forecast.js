import { SET_FORECAST } from '../actions/types.js';

const initialState = {
  forecast: null,
  currentWeather: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FORECAST:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
