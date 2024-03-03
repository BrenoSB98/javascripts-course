const club = "Vasco da Gama";

console.log(club.charAt(0));
console.log(club.charAt(5));
console.log(club.charCodeAt(3));
console.log(club.indexOf("G"));
console.log(club.lastIndexOf("a"));
console.log(club.substring(2, 5));
console.log(club.substring(1));
console.log(club.trim());
console.log(club.toUpperCase());
console.log(club.toLowerCase());
console.log(club.replace("a", "b"));
console.log(club.split(" "));
console.log("O maior clube do mundo é: ".concat(club).concat(" !!! O GIGANTE"));
console.log("O maior clube do mundo é: " + club + " !!! O GIGANTE");

const sufix = "O maior clube do mundo é: ";

console.log(sufix + club);
