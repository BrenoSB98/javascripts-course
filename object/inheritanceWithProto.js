const car = {
  atualSpeed: 0,
  maxSpeed: 250,
  year: 2024,

  accelerate(delta) {
    if (this.atualSpeed + delta <= this.maxSpeed) {
      this.atualSpeed += delta;
    } else {
      this.atualSpeed = this.maxSpeed;
    }
  },

  deacelarate(delta) {
    if (this.atualSpeed - delta >= 0) {
      this.atualSpeed -= delta;
    } else {
      this.atualSpeed = 0;
    }
  },

  brake() {
    this.atualSpeed = 0;
  },

  speedStatus() {
    return `${this.atualSpeed} Km/h de ${this.maxSpeed} Km/h`;
  },

  get year() {
    return this.year;
  },

  set year(value) {
    this.year = value;
  },
};

const uno = {
  name: "Uno",
  model: "Uno Special with ladder on the ceiling",
  make: "Fiat",
  year: 2002,
  maxSpeed: 500,
  speedStatus() {
    return `${this.model}: ${super.speedStatus()}`;
  },
};
Object.setPrototypeOf(uno, car);

uno.accelerate(300);
console.log(uno.speedStatus());
uno.brake();
console.log(uno.speedStatus());
