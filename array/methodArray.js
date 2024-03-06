const teamsF1 = ["Mercedes", "RedBull", "Ferrari", "Racing Bulls", "Alpine"];

teamsF1.sort();
console.log(teamsF1);

teamsF1.shift();
console.log(teamsF1);

teamsF1.unshift("Stakes F1 Team");
console.log(teamsF1);

teamsF1.splice(2, 0, "Haas F1 Team");
console.log(teamsF1);

const teamsF1Two = teamsF1.slice(0, 2); // create new array with elements from 0 to 2
console.log(teamsF1Two);
