export const API_KEY = '34e9e8865eb515573550395b2b961dff';
export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const ENDPOINT = 'https://api.darksky.net/forecast/';

export const DEFAULT_CITY_NAME = 'Kyiv';
export const KYIV_LAT = '50.450';
export const KYIV_LNG = '30.5234';

export const MAX_ICON_NAME_LENGTH = 2;

export const SLOW_WIND_SPEED = 8;
export const MEDIUM_WIND_SPEED = 13;

//IMAGES
export const HILL = {
  day: {
    leftHill: require('../assets/images/background/left-hill-day.png'),
    rightHill: require('../assets/images/background/right-hill-day.png')
  },
  night: {
    leftHill: require('../assets/images/background/left-hill-night.png'),
    rightHill: require('../assets/images/background/right-hill-night.png')
  }
};

export const WIND_MILL = {
  windmillSlow: require('../assets/images/icons/windmill-slow.gif'),
  windmillMid: require('../assets/images/icons/windmill-mid.gif'),
  windmillFast: require('../assets/images/icons/windmill-fast.gif')
};
