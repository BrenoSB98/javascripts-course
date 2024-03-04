let oddOrEven = function (number) {
  return number % 2 === 0 ? "even" : "odd";
};
console.log(oddOrEven(10));
console.log(oddOrEven(21));

console.log('--------');
oddOrEven = (number) => (number % 2 === 0 ? "even" : "odd");
// implicit return
console.log(oddOrEven(10));
console.log(oddOrEven(21));

console.log('--------');
oddOrEven = (number) => {
  return number % 2 === 0 ? "even" : "odd";
};
console.log(oddOrEven(10));
console.log(oddOrEven(21));

console.log('--------');
// Arrow functions with this
let compareWithThis = function (parameter) {
  console.log(this === parameter);
};
compareWithThis(global);

console.log('--------');
const object = {};
compareWithThis = compareWithThis.bind(object);
compareWithThis(global);
compareWithThis(object);

console.log('--------');
let compareWithThisArrow = (parameter) => console.log(this === parameter);
compareWithThisArrow(global);
compareWithThisArrow(module.exports);

console.log('--------');
compareWithThisArrow = compareWithThisArrow.bind(object);
compareWithThisArrow(global);
compareWithThisArrow(module.exports);
compareWithThisArrow(object);