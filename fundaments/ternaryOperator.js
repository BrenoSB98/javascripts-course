const brazilianLeague = (points) =>
  points >= 68 ? "Champion" : points < 45 ? "Demotion" : "Middle of Table";

console.log(brazilianLeague(68));
console.log(brazilianLeague(50));
console.log(brazilianLeague(35));
