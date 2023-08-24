const calc = (a) => {
  for (let index = 0; index < 100; index++) {
    const element = index;
    a += element;
  }
  return a;
};
module.exports = calc;
