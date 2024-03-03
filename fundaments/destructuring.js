// Destructuring in Objects
function RegisterProduct(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

const productOne = new RegisterProduct("Freezer", 10000, 10);
const productTwo = new RegisterProduct("Bike", 2000, 100);

const { name: product, price } = productOne;
console.log(product, price);

const { price: priceTwo } = productTwo;
console.log(priceTwo);

const { tax = 0, category = "unknown" } = productOne;
console.log(tax, category);

// Destructuring in Arrays
const playersOfVasco = ([
  Vegetti,
  ,
  Payet,
  Medel,
  LeoJardim,
  Paulinho,
  Galdames = 0,
] = [99, 10, 17, 1, 18, 27]);

console.log(Vegetti, Paulinho, Galdames);

function randNumber([min = 0, max = 10000]) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randNumber([50, 40]));
console.log(randNumber([100]));
console.log(randNumber([]));
console.log(randNumber([69, 99]));
console.log(randNumber([, 100]));
//console.log(randNumber()); -> TypeError: Cannot read property 'length' of undefined

// Destructuring in Functions
function rand(min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = { min: 27, max: 66 };
console.log(rand(randomNumber.min, randomNumber.max));
console.log(rand(randomNumber.max, randomNumber.min));
console.log(rand((min = 555), (max = 666)));
console.log(rand());
