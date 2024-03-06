const car = {
  _make: "Ford",
  _model: "Mustang",
  _year: 1964,
  _color: "red",

  get make() {
    return this._make;
  },
  set make(make) {
    this._make = make;
  },
  get model() {
    return this._model;
  },
  set model(model) {
    this._model = model;
  },
  get year() {
    return this._year;
  },
  set year(year) {
    this._year = year;
  },
  get color() {
    return this._color;
  },
  set color(color) {
    this._color = color;
  },

  toString() {
    return (
      "Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year
    );
  },

  drive() {
    console.log("Driving a " + this.model + " " + this.year);
  },
};

console.log(car.toString());
car.drive();

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// Object.entries(car).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

Object.defineProperty(car, "dateOfPurchase", {
  enumerable: true,
  writable: false,
  value: "28/10/1987",
});

car.dateOfPurchase = "29/10/1987";
console.log(car.dateOfPurchase);

const objectOne = { nameVasco: "Vasco Jersey Away", priceVasco: 399.99 };
const objectTwo = {
  nameWarriors: "Golden State Warriors Jersey Away",
  priceWarriors: 599.99,
};
const objectThree = { name: "Real Madrid Jersey Home", price: 799.99 };

const product = Object.assign({}, objectOne, objectTwo, objectThree);
console.log(product);
