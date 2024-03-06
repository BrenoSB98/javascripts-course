const client = [
  {
    name: "Hellen",
    age: 23,
    profession: "Nurse",
    status: "Diamond",
    salary: 20000,
  },
  {
    name: "Maria",
    age: 20,
    profession: "Programer",
    status: "Silver",
    salary: 15630.36,
  },
  {
    name: "Rayane",
    age: 23,
    profession: "Social Assistent",
    status: "Silver",
    salary: 2000,
  },
  {
    name: "Pedro",
    age: 28,
    profession: "Administrador",
    status: "Bronze",
    salary: 2687,
  },
  {
    name: "Matheus",
    age: 35,
    profession: "Influencer",
    status: "Gold",
    salary: 3560,
  },
  {
    name: "Davi",
    age: 70,
    profession: "Doctor",
    status: "Bronze",
    salary: 200000,
  },
  {
    name: "Bruno",
    age: 18,
    profession: "Student",
    status: "Silver",
    salary: 0,
  },
  {
    name: "Maria Fernanda",
    age: 45,
    profession: "Teacher",
    status: "Gold",
    salary: 2000,
  },
  {
    name: "Alisson",
    age: 18,
    profession: "Administrador",
    status: "Bronze",
    salary: 1506,
  },
  {
    name: "Camille",
    age: 29,
    profession: "Nurse",
    status: "Silver",
    salary: 3578,
  },
  {
    name: "Breno",
    age: 25,
    profession: "Programer",
    status: "Gold",
    salary: 150000,
  },
  {
    name: "Leonardo",
    age: 33,
    profession: "Programer",
    status: "Gold",
    salary: 7800,
  },
  {
    name: "Ingrid",
    age: 25,
    profession: "Nurse",
    status: "Bronze",
    salary: 2503,
  },
  {
    name: "Raphael",
    age: 41,
    profession: "Nurse",
    status: "Gold",
    salary: 5599.65,
  },
];

const result = client
  .map((e) => e.age)
  .reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
  });
console.log(result);
console.log();

const resultTwo = client
  .map((e) => e.salary)
  .reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
  }, 0);

console.log(resultTwo);
