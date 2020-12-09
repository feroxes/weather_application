import DayBackground from '../images/screen/screen-background-day-2.png';
import NightBackground from '../images/screen/screen-background-night-2.png';

export const Themes = {
  day: {
    name: 'day',
    backgroundImage: DayBackground,
    star: {
      backgroundColor: '#fef9e5'
    }
  },
  night: {
    name: 'night',
    backgroundImage: NightBackground,
    star: {
      boxShadow: '15px 15px 0 0 #e6eef2',
      right: '60px'
    }
  }
};
