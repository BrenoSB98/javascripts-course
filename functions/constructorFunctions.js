function Car(make, model, year, maxSpeed = 200, delta = 1) {
  let AtualSpeed = 0;
  this.make = make;
  this.model = model;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.delta = delta;

  this.accelerate = function () {
    if (AtualSpeed + this.delta > this.maxSpeed) {
      AtualSpeed = this.maxSpeed;
    } else {
      AtualSpeed += this.delta;
    }
  };

  this.decelerate = function () {
    if (AtualSpeed - this.delta < 0) {
      AtualSpeed = 0;
    } else {
      AtualSpeed -= this.delta;
    }
  };

  this.getAtualSpeed = function () {
    return AtualSpeed;
  };
}

const redBullRacing = new Car("Red Bull Racing", "RB20", 2024, 320, 20);

redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
console.log(redBullRacing.getAtualSpeed());
redBullRacing.decelerate();
console.log(redBullRacing.getAtualSpeed());
redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
redBullRacing.accelerate();
console.log(redBullRacing.getAtualSpeed());
redBullRacing.decelerate();
redBullRacing.decelerate();
console.log(redBullRacing.getAtualSpeed());

console.log(typeof redBullRacing);
