function printLoveMessage(name) {
  console.log(`Hey ${name}, I love you!`);
}
printLoveMessage("Hellen");

function printBigClub(club) {
  console.log(`Hey ${club} , you is a big club!`);
}
printBigClub("Vasco");

const returnChampion = function (club) {
  return club;
};
console.log(returnChampion("Real Madrid"));

const object = {};
object.speaking = function () {
  return "I don't speaking English";
};
console.log(object.speaking());

function add(a, b) {
  return function (c) {
    return (a + b) * c;
  };
}
console.log(add(2, 3)(4));
const result = add(2, 3);
console.log(result(10));

