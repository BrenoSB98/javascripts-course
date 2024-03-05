function getPrice(tax = 0, currency = "R$") {
  return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const productOne = {
  name: "Vasco Jersey Away",
  price: 399.99,
  discount: 0.1,
  getPrice,
};

global.price = 30;
global.discount = 0.1;
// Basic form
console.log(getPrice());
console.log(productOne.getPrice());

// Apply form
console.log(getPrice.apply(productOne));
console.log(getPrice.apply(productOne, [0.3, "$"]));

// Call form
console.log(getPrice.call(productOne));
console.log(getPrice.call(productOne, 0.3, "$"));
