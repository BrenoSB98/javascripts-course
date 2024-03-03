function RegisterProduct(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

const productOne = new RegisterProduct("Freezer", 10000, 10);
const productTwo = new RegisterProduct("Bike", 2000, 100);

console.log(productOne);
console.log(productTwo);
