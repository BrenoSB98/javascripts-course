const client = [
  { name: "Hellen", age: 23, profession: "Nurse", status: "Diamond" },
  { name: "Maria", age: 20, profession: "Programer", status: "Silver" },
  { name: "Rayane", age: 23, profession: "Social Assistent", status: "Silver" },
  { name: "Pedro", age: 28, profession: "Administrador", status: "Bronze" },
  { name: "Matheus", age: 35, profession: "Influencer", status: "Gold" },
  { name: "Davi", age: 70, profession: "Doctor", status: "Bronze" },
  { name: "Bruno", age: 18, profession: "Student", status: "Silver" },
  { name: "Maria Fernanda", age: 45, profession: "Teacher", status: "Gold" },
  { name: "Alisson", age: 18, profession: "Administrador", status: "Bronze" },
  { name: "Camille", age: 29, profession: "Nurse", status: "Silver" },
  { name: "Breno", age: 25, profession: "Programer", status: "Gold" },
  { name: "Leonardo", age: 33, profession: "Programer", status: "Gold" },
  { name: "Ingrid", age: 25, profession: "Nurse", status: "Bronze" },
  { name: "Raphael", age: 41, profession: "Nurse", status: "Gold" },
];

console.log(client.filter((element) => element.status === "Diamond"));
console.log(
  client.filter((element) => element.status === "Gold" && element.age > 25)
);

const young = (element) => element.age < 29;
const statusGold = (element) => element.status === "Gold";

console.log(client.filter(young).filter(statusGold));
