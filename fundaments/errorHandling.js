function printBigClub(name) {
  if (name !== "Vasco da Gama") {
    throw new Error("O nome do time não é Vasco da Gama");
  }
  console.log("The BIGGEST CLUB IN THE WORLD IS " + name);
}

try {
  printBigClub("Flamengo");
} catch (error) {
  console.log("Erro: ", error.message);
} finally {
  console.log("FIM");
}

try {
  printBigClub("Vasco da Gama");
} catch (error) {
  console.log("Erro: ", error.message);
}
