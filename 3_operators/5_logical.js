// Truth table logic

//! Logical AND (&&)
console.log(true && false); // false

// Actual evaluation rule:
console.log("Cat" && "Dog"); // "Dog" (both truthy, returns last)
console.log(null && "Dog");  // null  (first falsy operand encountered)
console.log(0 && 42);        // 0     (first falsy operand encountered)

//! Logical OR (||)
console.log(false || true); // true

// Actual evaluation rule:
console.log("Cat" || "Dog"); // "Cat" (first truthy value)
console.log(0 || "Fallback");// "Fallback" (0 is falsy)
console.log("" || 0 || null);// null (all falsy, returns last)

//! Logical NOT (!)
// Single !: Coerces the operand to boolean and inverts it.
// Double !!: Canonical idiom to coerce any value directly to its native boolean equivalent.

console.log(!true);      // false
console.log(!0);         // true (0 is falsy)
console.log(!"hello");   // false (non-empty string is truthy)

// Direct boolean conversion:
console.log(!!"user");   // true
console.log(!!undefined);// false

// Exponentiation has higher precedence than multiplication:
let res1 = 2 * 3 ** 2; // 2 * 9 = 18
console.log(res1);
// Unary negation vs exponentiation associativity:
let res2 = 2 ** 3 ** 2; // Right-to-left: 2 ** (3 ** 2) = 2 ** 9 = 512
console.log(res2);

// Logical precedence: && runs before ||:
let res3 = true || false && false; // true || (false && false) = true
console.log(res3);
