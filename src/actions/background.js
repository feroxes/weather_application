export default () => {
  const date = new Date();
  const dayTime = date.getHours() >= 20 && date.getHours() <= 4 ? 'night' : 'day';
  return {
    type: 'SET_DAY_TIME',
    payload: 'night'
  };
};
