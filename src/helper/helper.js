export const getDayTime = () => {
  const date = new Date();
  return date.getHours() >= 17 || date.getHours() <= 4 ? 'night' : 'day';
};

export const formatDate = (date, options = { day: 'numeric', month: 'long' }) => {
  const currentDate = new Date(date * 1000);
  return currentDate.toLocaleDateString('en-GB', options);
};
