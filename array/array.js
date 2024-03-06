let clubs = new Array("Vasco", "Real Madrid", "Los Angeles Galaxy");
console.log(clubs);
clubs.push("Manchester City");
console.log(clubs);

clubs = [
  "Vasco",
  "Real Madrid",
  "Los Angeles Galaxy",
  "Manchester City",
  "Liverpool",
];
console.log(clubs[0]);
console.log(clubs[1]);
console.log(clubs[4]);

clubs[5] = "Manchester United";
console.log(clubs);
console.log(clubs.length);
console.log(clubs.sort());
console.log(clubs.reverse());
console.log(clubs.pop());
console.log(clubs.slice(5, 1));
console.log(clubs);
console.log(delete clubs[2]);
console.log(clubs);