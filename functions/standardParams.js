// Strategy 1 for generating default values
function sum(a, b = 0, c = 0) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(sum(), sum(1), sum(1, 2), sum(1, 2, 3));

// Strategy 2, 3 and 4 for generating default values
function multiply(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a * b * c;
}
console.log(multiply(), multiply(2), multiply(2, 3), multiply(4, 5, 6));

// Strategy 5 for generating default values ES6 2015
function division(a = 1, b = 1, c = 1) {
  return a / b * c;
}
console.log(division(), division(2), division(2, 3), division(4, 5, 6));
