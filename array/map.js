const points = [16, 56, 12, 23, 45, 12, 34];

// Basic Map
let result = points.map((element) => element * 3);
console.log(result);

// Nesting of Maps
const sumTens = (element) => element + 10;
const multiplyByTen = (element) => element * 10;
const transformForCash = (element) =>
  `R$ ${parseFloat(element).toFixed(2).replace(".", ",")}`;

console.log(points.map(sumTens).map(multiplyByTen).map(transformForCash));

// Challenge about Maps using Array of Objects
const shoppingCart = [
  { name: "Burger", price: 3.45 },
  { name: "Pizza", price: 13.9 },
  { name: "Hot Dog", price: 41.22 },
  { name: "French Fries", price: 7.5 },
  { name: "Ice Cream", price: 3.5 },
  { name: "Coffee", price: 1.5 },
];

console.log(shoppingCart.map((items) => items.price));

// Challenge about Maps using Array of Objects in String
const shoppingCart2 = [
  '{ "name": "Burger", "price": 3.45 }',
  '{ "name": "Pizza", "price": 13.9 }',
  '{ "name": "Hot Dog", "price": 41.22 }',
  '{ "name": "French Fries", "price": 7.5 }',
  '{ "name": "Ice Cream", "price": 3.5 }',
  '{ "name": "Coffee", "price": 1.5 }',
];

const transfromInObjects = (elements) => JSON.parse(elements);
const getPrice = (element) => element.price;
const resultChallenge = shoppingCart2.map(transfromInObjects).map(getPrice);
console.log(resultChallenge);

console.log(shoppingCart2.map(transfromInObjects).map(getPrice));
