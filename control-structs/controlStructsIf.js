function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

const printBrazilianLeagueSituation = function (points) {
  if (isNumeric(points)) {
    if (points >= 68) {
      console.log("Champion");
    } else if (points >= 45) {
      console.log("Middle of Table");
    } else {
      console.log("Demotion");
    }
  } else {
    console.log("The value passed for parameter is not a number!");
  }
};

printBrazilianLeagueSituation(68);
printBrazilianLeagueSituation(50);
printBrazilianLeagueSituation(35);
printBrazilianLeagueSituation('Vasco');
printBrazilianLeagueSituation(null);
printBrazilianLeagueSituation(undefined);