// ! Strings(Primitive)

let str = "Hello World";
let name1 = 'Albert';
let name2 = `Smith`
console.log(typeof str);

console.log(str +" I am"+ name1 + name2);
console.log(typeof str, `${str}, I am ${name1} ${name2}`);

// ! Numbers (Primitive)
let count = 42;
let price = 19.99;
let invalid = "abc" / 2; // NaN(Not-a-Number)
console.log(typeof count);

console.log(invalid);

// ! bigint (Primitive)
const bigNumber = 9007199254740991n + 2n; // 9007199254740993n
console.log(BigInt);
console.log(typeof bigNumber);


// ! boolean (Primitive)
let isLoggedIn = true;
let hasPermission = false;
console.log(typeof isLoggedIn);

// ! undefined (Primitive)
let status;
console.log(status); // undefined

// ! null (Primitive) 
let userProfile = null; // Deliberately empty
console.log(typeof null); // "object" (known quirk in JS since 1995)

// ! symbol (Primitive)
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(typeof id1 )
console.log(id1 === id2); // false (always unique)

// ! object (Non-Primitive)
// Plain Object
const user = { name: "Aria", age: 24 };

// Array (ordered list - special kind of object)
const colors = ["red", "green", "blue", 158, true];
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true (proper way to check)

// Function (callable object)
function add(a, b) {
  return a + b;
}
console.log(typeof add); // "function" (functions are technically objects)

// Built-ins (Dates, Maps, Sets, RegExps)
const now = new Date();
const uniqueItems = new Set([1, 2, 3]);
console.log(now);
console.log(uniqueItems);


// ! Primitives (Passed by Value): Copying creates an independent duplicate.

let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// ! Objects (Passed by Reference): Copying copies the memory pointer, not the actual data.

let obj1 = { score: 10 };
let obj2 = obj1;
obj2.score = 20;
console.log(obj1.score); // 20 (both point to the same memory space)
console.log(obj2.score);