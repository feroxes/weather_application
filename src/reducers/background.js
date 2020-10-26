import { SET_DAY_TIME } from '../actions/types.js';

const initialState = {
  dayTime: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DAY_TIME:
      return {
        ...state,
        dayTime: payload
      };
    default:
      return state;
  }
};
