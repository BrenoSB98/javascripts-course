const products = ["Iphone 15", "Vivo Book", "Galaxy S22+", "Freezer", "Mouse"];

const printProduct = (product, index) =>
  console.log(`${index + 1}. ${product}`);

products.forEach(printProduct);
products.forEach((products) => console.log(products));

// Filtering a list of notes and take only the notes below 6
const notes = [7.7, 6.5, 5.3, 4.1, 3.0, 8.9, 7.5, 7.0, 9.5, 10.0, 2.1];
const redNotes = notes.filter((note) => note < 6);
console.log(redNotes);

// Example of a callback function in browser
document.getElementsByTagName("body")[0].onclick = (e) =>
  console.log("O evento ocorreu: " + e.target);
