class Vehicle {
  constructor(
    make,
    model,
    maxSpeed = 200,
    category,
    price = 0,
    color = "black",
    year = 2020
  ) {
    this.make = make;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.category = category;
    this.price = price;
    this.color = color;
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(
    make,
    model,
    maxSpeed = 200,
    category,
    price = 0,
    color = "black",
    year = 2020,
    axis,
    tires
  ) {
    super(make, model, maxSpeed, category, price, color, year);
    this.axis = axis;
    this.tires = tires;
  }
}

const truck1 = new Truck(
  "Mercedes Benz",
  "Arocs",
  150,
  "Truck",
  500000,
  "white",
  2022,
  4,
  8
);

console.log(truck1);
