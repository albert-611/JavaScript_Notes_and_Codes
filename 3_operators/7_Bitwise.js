// ! 1. Bitwise AND (&)
const a = 5; // 0101
const b = 3; // 0011

const result1 = a & b; // 0001 -> 1
console.log(result1);  // 1

// ! 2. Bitwise OR (|)
const c = 5; // 0101
const d = 3; // 0011

const result2 = a | b; // 0111 -> 7
console.log(result2);  // 7

// ! 3. Bitwise XOR (^) — Exclusive OR
const e = 5; // 0101
const f = 3; // 0011

const result3 = a ^ b; // 0110 -> 6
console.log(result3);  // 6

// ! 4. Bitwise NOT (~)
const g = 5; // Inverts bits to represent -(5 + 1)

const result4 = ~g;
console.log(result4); // -6

// ! 5. Left Shift (<<)
const h = 5;

const shiftOne = h << 1;
const shiftTwo = h << 2;

console.log(shiftOne); // Output: 10
console.log(shiftTwo); // Output: 20

// ! 6. Sign-Propagating Right Shift (>>)
const positiveNum = 20;
const negativeNum = -20;

console.log(positiveNum >> 1); // Output: 10
console.log(positiveNum >> 2); // Output: 5
console.log(negativeNum >> 1); // Output: -10

// ! 7. Zero-Fill Right Shift (>>>)
const positiveNum1 = 20;
const negativeNum1 = -5;

// Positive number behaves identical to >>
console.log(positiveNum1 >>> 1); // Output: 10

// Negative number becomes an unsigned 32-bit positive integer
console.log(negativeNum1 >>> 1); // Output: 2147483645

// ! 8. Nullish Coalescing Operator.
const user1 = null;
const user2 = undefined;
const user3 = "Alice";

console.log(user1 ?? "Anonymous"); // "Anonymous" (left is null)
console.log(user2 ?? "Anonymous"); // "Anonymous" (left is undefined)
console.log(user3 ?? "Anonymous"); // "Alice"     (left is a defined value)

let settings = {
  theme: "dark",
  volume: null
};

// ! 9. Nullish Assignment (??=)
settings.theme ??= "light"; // Remains "dark"
settings.volume ??= 50;     // Becomes 50

console.log(settings); 
// Output: { theme: "dark", volume: 50 }