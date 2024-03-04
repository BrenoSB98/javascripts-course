function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const n = 30;
console.log(`The term ${n} in the Fibonacci sequence is: ${fibonacci(n)}`);
