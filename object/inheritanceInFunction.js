String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Hellen".reverse());
console.log("Breno".reverse());
console.log("Vasco da Gama".reverse());
console.log("Maria Eduarda".reverse());
console.log("Rayane".reverse());
console.log("Maria Fernanda".reverse());
console.log("Gabriel".reverse());

// Simulating the operator new

function novo(f, ...params) {
  const object = {};
  object.__proto__ = f.prototype;
  f.apply(object, params);
  return object;
}

function carObject(model, year) {
  this.model = "Gol";
  this.year = 2000;
}

const car = novo(carObject, "Gol", 2000);
console.log(car);
