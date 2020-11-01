import { DAY_TIME } from '../config/constants.js';

export const getDayTime = () => {
  const date = new Date();
  return date.getHours() >= 17 || date.getHours() <= 4 ? DAY_TIME.Night : DAY_TIME.Day;
};

export const formatDate = (date, options = { day: 'numeric', month: 'long' }) => {
  const currentDate = new Date(date * 1000);
  return currentDate.toLocaleDateString('en-GB', options);
};
