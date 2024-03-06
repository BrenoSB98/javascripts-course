const product = {
  shop: "Nobre Market",
  name: "",
  price: 0,
  make: "",
  model: "",
  category: "Electronics",
  year: 2024,
  quantity: 0,

  toString() {
    return `Name: ${this.name}, Price: ${this.price} Category: ${this.category} Quantity: ${this.quantity}`;
  },
};

const vivoBook = {
  name: "Notebook Vivo Book",
  model: "Vivo Book 15",
  make: "Asus",
  price: 3499.9,
  category: "Electronics",
  year: 2020,
};

const couch = {
  name: "Chouch Easy",
  model: "Deluxe Couch",
  make: "Comfort Couchs",
  price: 6999.9,
  category: "Furniture",
  year: 2024,
};

const smartphone = Object.create(product);
smartphone.name = "Samsung Galaxy S20";
smartphone.model = "Galaxy S20";
smartphone.make = "Samsung";
smartphone.price = 3999.9;

const iphone = Object.create(product, {
  name: {
    value: "iPhone",
    writable: false,
    enumerable: true,
  },
  model: { value: "15 Pro Max", writable: false, enumerable: true },
  make: { value: "Apple", writable: false, enumerable: true },
  price: {
    value: 4999.9,
    writable: false,
    enumerable: true,
  },
});

console.log(smartphone.toString());
console.log(iphone.toString());
console.log(iphone.category);

console.log(Object.keys(couch));

for (let key in iphone) {
  iphone.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Inherited from father by inheritance: ${key}`);
}
