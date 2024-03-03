// This operator compares only the values, ignoring the type.
console.log('01 - "1" == 1 is ', "1" == 1);
console.log('02 - "1" != 1 is ', "1" != 1);

// This operator compares the values and the types. Return true if the two values are extritically equal.
console.log('03 - "1" === 1 is ', "1" === 1);

// This operator compares the values and the types. Return true if the two values are extractively different.
console.log('04 - "1" !== 1 is ', "1" !== 1);

// Comperates Date and Time
const dateOne = new Date(0);
const dateTwo = new Date(0);

// Dates are calculated in milliseconds from date zero.
console.log("05 - dateOne === dateTwo is ", dateOne === dateTwo);
console.log("06 - dateOne == dateTwo is ", dateOne == dateTwo);
console.log(
  "07 - dateOne.getTime() === dateTwo.getTime() is ",
  dateOne.getTime() === dateTwo.getTime()
);
