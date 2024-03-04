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
