class Person {
  constructor(firstName, lastName, age, gender, weight, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
    this.height = height;
  }
  getDados() {
    return (
      "My name is " +
      this.firstName +
      " " +
      this.lastName +
      " and I am " +
      this.age +
      " years old and I am " +
      this.gender +
      " and I have " +
      this.weight +
      " kg and " +
      this.height +
      " cm."
    );
  }
}

const person = new Person("Hellen", "Nascimento", 23, "female", 49, 167);
console.log(person.getDados());

const createPerson = function (
  firstName,
  lastName,
  age,
  gender,
  weight,
  height
) {
  return {
    getDados: () =>
      console.log(
        "My name is " +
          firstName +
          " " +
          lastName +
          " and I am " +
          age +
          " years old and I am " +
          gender +
          " and I have " +
          weight +
          " kg and " +
          height +
          " cm."
      ),
  };
};

const personTwo = createPerson("Hellen", "Nascimento", 23, "female", 49, 167);
personTwo.getDados();

function personFactory(firstName, lastName, age, gender, weight, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.weight = weight;
  this.height = height;

  this.getDados = function () {
    return (
      "My name is " +
      this.firstName +
      " " +
      this.lastName +
      " and I am " +
      this.age +
      " years old and I am " +
      this.gender +
      " and I have " +
      this.weight +
      " kg and " +
      this.height +
      " cm."
    );
  };
}

const personThree = new personFactory(
  "Hellen",
  "Nascimento",
  23,
  "female",
  49,
  167
);
console.log(personThree.getDados());
console.log(personThree.firstName);
