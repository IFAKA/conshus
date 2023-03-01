export const getXTimesNumber = (string: string) => {
  const crrTimesArr = string.match(/(-?x\d[\d\.]*)/g) ?? ["x1"];
  const crrTimes = crrTimesArr[crrTimesArr.length - 1];
  const crrNmb = +crrTimes.slice(1);
  return crrNmb;
};
