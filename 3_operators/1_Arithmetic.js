let a = 5, b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Special IEEE 754 numeric cases:
console.log(5 / 0);      // Infinity
console.log(-5 / 0);     // -Infinity
console.log(0 / 0);      // NaN
console.log("text" * 2); // NaN (cannot coerce text to number)