import { SET_CITY } from './types.js';

export default city => {
  return {
    type: SET_CITY,
    payload: city
  };
};
