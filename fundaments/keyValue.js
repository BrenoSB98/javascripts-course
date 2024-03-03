// Lexical Context One
const club = "Vasco da Gama";

function createClub(name = "Vasco da Gama") {
  // Lexical Context Two
  const club = "Vasco da Gama";
  return club;
}

// Object are nested groups of key-value pairs
const memberOfClub = {
  name: "Breno Braido",
  age: 25,
  weight: 100,
  height: 1.8,
  address: {
    city: "Rio de Janeiro",
    state: "RJ",
    street: "José da Silva",
    number: 123,
  },
};

console.log(club);
console.log(createClub());
console.log(memberOfClub);
