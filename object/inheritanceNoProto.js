const vivoBook = {
  name: "Notebook Vivo Book",
  model: "Vivo Book 15",
  make: "Asus",
  price: 3499.9,
  category: "Electronics",
  ano: 2020,
};

const couch = {
  name: "Chouch Easy",
  model: "Deluxe Couch",
  make: "Comfort Couchs",
  price: 6999.9,
  category: "Furniture",
  ano: 2024,
};

console.log(vivoBook.__proto__);
console.log(couch.__proto__);
console.log(vivoBook.__proto__ === Object.prototype);
console.log(couch.__proto__ === Object.prototype);
