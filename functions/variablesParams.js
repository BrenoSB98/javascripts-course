function sum(a, b) {
  let sum = 0;
  for (i in arguments) {
    // arguments is an array of arguments, this function became legacy after ES6 2015
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
console.log(sum(1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9));
console.log(sum(10, 20, "Vasco"));
console.log(sum("a", "b", "c", "d"));
