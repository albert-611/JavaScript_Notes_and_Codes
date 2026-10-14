// ==========================================
// 1. const -> Fixed value (Cannot be reassigned)
// Default choice for most variables.
// ==========================================
const birthYear = 1995;
// birthYear = 2000; // ❌ ERROR: Cannot reassign

// Tip: Arrays and objects declared with const CAN modify their contents:
const user = { name: "Alex" };
console.log(user.name);
user.name = "Sam"; //  ALLOWED: Property change is fine
console.log(user.name);


// ==========================================
// 2. let -> Changing value (Can be reassigned)
// Use for counters, loops, or toggles.
// ==========================================
let score = 0;
score = 10; //  ALLOWED: Value updated to 10

// Block Scope: Stays trapped inside { }
if (true) {
  let secret = "hidden";
}
// console.log(secret); // ❌ ERROR: Not visible outside { }


// ==========================================
// 3. var -> Old JavaScript (Avoid using)
// Leaks out of blocks and causes bugs.
// ==========================================
if (true) {
  var leaked = "I escaped the block!";
}
console.log(leaked); //  Prints: "I escaped the block!" (Dangerous)

var x = 1;
var x = 2; //  ALLOWED: Accidentally re-declaring works without warning


// ==========================================
// SUMMARY RULE
// 1. Always start with 'const'.
// 2. Change to 'let' only if you reassign it.
// 3. Never use 'var'.
// ==========================================