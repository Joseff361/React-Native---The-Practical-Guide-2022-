export const generateRandomBetween = (min, max, exclude) => {
  if (max - min === 1 || max === min) return min;

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
