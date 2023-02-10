export const getLastNumber = (string: string) => {
  const crrNmb = string.match(/(-?\d[\d\.]*)/g) ?? [0];
  return +crrNmb[crrNmb.length - 1];
};
