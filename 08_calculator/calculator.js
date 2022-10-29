const add = function(a,b) {
	let equals = a + b;
  return equals;
};

const subtract = function(a,b) {
	let equals = a - b;
  return equals;
};

const sum = function(nums) {
	const equals = nums.reduce((partialSum, a) => partialSum + a, 0);
  return equals;
};

const multiply = function(nums) {
  const equals = nums.reduce((partialSum, a) => partialSum * a, 1);
  return equals;
};

const power = function(a,b) {
	let equals = a ** b;
  return equals;
};


const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};
console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
