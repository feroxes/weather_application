import { DAY_TIME, MAX_ICON_NAME_LENGTH } from '../config/constants.js';

export const getDayTime = () => {
  const date = new Date();
  return date.getHours() >= 17 || date.getHours() <= 4 ? DAY_TIME.Night : DAY_TIME.Day;
};

export const formatDate = (date, options = { day: 'numeric', month: 'long' }) => {
  const currentDate = new Date(date * 1000);
  return currentDate.toLocaleDateString('en-GB', options);
};

export const formatPrecipitationsIcon = icon => {
  if (!icon) return ' ';
  else {
    const splitedIconName = icon.split('-');
    if (splitedIconName.length > MAX_ICON_NAME_LENGTH) {
      return splitedIconName.splice(0, splitedIconName.length - 1).join(' ');
    } else return splitedIconName.join(' ');
  }
};
