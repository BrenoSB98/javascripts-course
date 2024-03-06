// Use the literal notation, form one.
const objectOne = {
  name: "Vasco Jersey Away",
  price: 399.99,
};
console.log(objectOne);

// Use Object in JS, form two.
const objectTwo = new Object();
objectTwo.name = "Vasco Jersey Away";
console.log(objectTwo);

// Use Constructor Functions in JS, form three.
function createProduct(name, price, discount) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.searchName = () => {
    return this.name;
  };
  this.searchPrice = () => {
    return this.price;
  };
  this.priceWithDiscount = () => {
    return this.price * (1 - this.discount);
  };
}

const productOne = new createProduct("Freezer", 6254.32, 0.2);
const productTwo = new createProduct("Iphone 15", 15568.99, 0.1);
console.log([productOne.name, productOne.price, productOne.discount]);
console.log(productOne.searchName());
console.log(productOne.searchPrice());
console.log(productOne.priceWithDiscount());

console.log([productTwo.name, productTwo.price, productTwo.discount]);
console.log(productTwo.searchName());
console.log(productTwo.searchPrice());
console.log(productTwo.priceWithDiscount());

// Use Factory Functions in JS, form four.
function createEmployee(name, salary, department, faults) {
  return {
    name,
    salary,
    department,
    faults,
    getSalary() {
      return (salary / 30) * (30 - faults);
    },
  };
}

const employeeOne = createEmployee("Hellen Silva", 15000, "Nurce", 2);
const employeeTwo = createEmployee("Maria Luiz", 3000, "Cleaning assistant", 1);
const employeeThree = createEmployee("Breno Silva", 12999, "Data Analyst", 6);

console.log(employeeOne.getSalary());
console.log(employeeTwo.getSalary());
console.log(employeeThree.getSalary());
