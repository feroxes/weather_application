import { SET_DAY_TIME } from './types.js';

export default () => {
  const date = new Date();
  const dayTime = date.getHours() >= 17 || date.getHours() <= 4 ? 'night' : 'day';
  return {
    type: SET_DAY_TIME,
    payload: dayTime
  };
};
