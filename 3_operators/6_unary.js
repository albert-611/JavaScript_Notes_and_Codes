let a = 5;
let b = a++; 
console.log(b); // 5 (returned original value before incrementing)
console.log(a); // 6 (incremented afterwards)

let p = 5;
let q = ++p; 
console.log(q); // 6 (incremented first, then assigned)
console.log(p); // 6

// Exponentiation has higher precedence than multiplication:
let res1 = 2 * 3 ** 2; // 2 * 9 = 18
console.log(res1);
// Unary negation vs exponentiation associativity:
let res2 = 2 ** 3 ** 2; // Right-to-left: 2 ** (3 ** 2) = 2 ** 9 = 512
console.log(res2);

