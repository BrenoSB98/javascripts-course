const product = {
  name: "Vasco Jersey Away",
  price: 399.99,
  searchName() {
    return this.name;
  },
  searchPrice() {
    return this.price;
  },
};

console.log(product.searchName());
console.log(product.searchPrice());

// The block of code below brings a conflict between the paradigms os Structured and Object Oriented Programming.
const productName = product.searchName;
console.log(productName());

const productPrice = product.searchPrice;
console.log(productPrice());

// To resolve this conflict, we need to use the function bind() for connect to the object in variable productName.
const nameProduct = product.searchName.bind(product);
console.log(nameProduct());

const priceProduct = product.searchPrice.bind(product);
console.log(priceProduct());

function Person() {
  this.name = "John";
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}
new Person();

function counter() {
  this.count = 0;

  setInterval(
    function () {
      this.count++;
      console.log(this.count);
    }.bind(this),
    1000
  );
}

new counter();

function counterTwo() {
  this.count = 0;
  const self = this;

  setInterval(function () {
    self.count++;
    console.log(self.count);
  }, 1000);
}

new counterTwo();
