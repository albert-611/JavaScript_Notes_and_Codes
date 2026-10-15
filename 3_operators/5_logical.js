// Truth table logic

//! Logical AND (&&)
console.log(true && false); // false
console.log(false && false); // false
console.log(true && true); // false

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

// Nullish Coalescing Operator.
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

// Nullish Assignment (??=)
settings.theme ??= "light"; // Remains "dark"
settings.volume ??= 50;     // Becomes 50

console.log(settings); 
// Output: { theme: "dark", volume: 50 }
