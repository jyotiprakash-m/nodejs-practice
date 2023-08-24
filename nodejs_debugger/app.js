function addNumbers(a, b) {
  const result = a + b;
  console.log(`The sum of ${a} and ${b} is ${result}`);
  return result;
}

function multiplyNumbers(a, b) {
  const result = a * b;
  console.log(`The product of ${a} and ${b} is ${result}`);
  return result;
}

const num1 = 10;
const num2 = 5;

const sum = addNumbers(num1, num2);
const product = multiplyNumbers(sum, num2);
