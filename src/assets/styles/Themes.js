import DayBackground from '../images/screen/screen-background-day-2.png';
import NightBackground from '../images/screen/screen-background-night-2.png';

export const Themes = {
  day: {
    name: 'day',
    backgroundImage: DayBackground,
    backgroundWrapper: 'linear-gradient(180deg, #fcf8f1, #fcd1cb) center no-repeat',
    star: {
      backgroundColor: '#fef9e5'
    }
  },
  night: {
    name: 'night',
    backgroundImage: NightBackground,
    backgroundWrapper: 'linear-gradient(180deg, #39346a, #a9dff7) center no-repeat;',
    star: {
      boxShadow: '15px 15px 0 0 #e6eef2',
      right: '60px'
    }
  }
};
