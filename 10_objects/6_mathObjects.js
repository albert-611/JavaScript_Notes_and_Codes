
// =================================
// JAVASCRIPT MATH OBJECT
// =================================

//! 1. Rounding methods
console.log("ROUND:", Math.round(4.6)); // 5
console.log("FLOOR:", Math.floor(4.9)); // 4
console.log("CEIL:", Math.ceil(4.1));  // 5
console.log("TRUNC:", Math.trunc(4.9)); // 4

//! 2. Absolute value
console.log("ABS:", Math.abs(-25)); // 25

//! 3. Maximum and minimum
console.log("MAX:", Math.max(10, 50, 30, 90)); // 90
console.log("MIN:", Math.min(10, 50, 30, 90)); // 10

//! 4. Random number
console.log("RANDOM:", Math.random());

//! Random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("RANDOM 1-10:", randomNumber);

//! 5. Power and square root
console.log("POWER:", Math.pow(5, 2)); // 25
console.log("SQRT:", Math.sqrt(64)); // 8
console.log("POWER OPERATOR:", 5 ** 2); // 25

// 6. Other useful methods
console.log("SIGN:", Math.sign(-5)); // -1
console.log("CBRT:", Math.cbrt(27)); // 3
console.log("LOG:", Math.log(Math.E)); // 1

//! 7. Math constants
console.log("PI:", Math.PI);
console.log("E:", Math.E);

// 8. Find max and min from an array
let numbers = [10, 50, 30, 90, 20];

console.log("ARRAY MAX:", Math.max(...numbers)); // 90
console.log("ARRAY MIN:", Math.min(...numbers)); // 10
// The ... is called the Spread Operator in JavaScript.
// Its job here is to expand an array into individual elements.

// 9. Generate random number between min and max
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("RANDOM 5-20:", randomBetween(5, 20));

//! 10. Calculate circle area
let radius = 5;
let area = Math.PI * radius ** 2;

console.log("CIRCLE AREA:", area);
