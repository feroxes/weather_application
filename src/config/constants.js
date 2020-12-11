export const API_KEY = '34e9e8865eb515573550395b2b961dff';
export const PROXY = 'https://agile-everglades-29730.herokuapp.com/';
export const ENDPOINT = 'https://api.darksky.net/forecast/';

export const APP_STATES = {
  Created: 'Created',
  Active: 'Active',
  LoadingData: 'LoadingData'
};

export const DEFAULT_CITY = {
  country: 'UA',
  lat: '50.45466',
  lng: '30.5238',
  name: 'Kyiv'
};

export const DAY_TIME = {
  Day: 'day',
  Night: 'night'
};

export const MAX_ICON_NAME_LENGTH = 2;

export const SLOW_WIND_SPEED = 8;
export const MEDIUM_WIND_SPEED = 13;

//IMAGES
export const IMAGES = {
  hill: {
    day: {
      leftHill: require('../assets/images/background/left-hill-day.png'),
      rightHill: require('../assets/images/background/right-hill-day.png')
    },
    night: {
      leftHill: require('../assets/images/background/left-hill-night.png'),
      rightHill: require('../assets/images/background/right-hill-night.png')
    }
  },
  wind_mill: {
    windmillSlow: require('../assets/images/icons/windmill-slow.gif'),
    windmillMid: require('../assets/images/icons/windmill-mid.gif'),
    windmillFast: require('../assets/images/icons/windmill-fast.gif')
  },
  eagle: require('../assets/images/screen/eagle.gif'),
  icons: icon => require(`../assets/images/icons/${icon}.png`)
};
