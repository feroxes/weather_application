export function getDayTime() {
  const date = new Date();
  return date.getHours() >= 17 || date.getHours() <= 4 ? 'night' : 'day';
}
