export const convertMinToHour = (min) => {
  return min ? Math.floor(min / 60) + "h " + (min % 60) + "m" : "--.--";
};
