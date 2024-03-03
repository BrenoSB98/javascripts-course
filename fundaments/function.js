function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum());
console.log(sum(10, 20));
console.log(sum(10));

const sumArrow = (a = 0, b = 0) => a + b;
console.log(sumArrow(5, 10));
console.log(sumArrow(10, 20));
console.log(sumArrow());

const subtract = function (a = 0, b = 0) {
  console.log(a - b);
};
subtract();

const subtractArrow = (a = 0, b = 0) => console.log(a - b);
subtractArrow(80, 10);
