// ! Equality: == vs. ===
// == (Loose / Abstract Equality): Compares values after implicit type coercion. If types differ, JavaScript converts one or both operands according to ECMAScript coercion rules.
// === (Strict Equality): Compares both value and type without type conversion. If types differ, it immediately evaluates to false.

5 == "5";            // true  (string "5" coerces to number 5)
5 === "5";           // false (number !== string)

0 == false;          // true  (false coerces to 0)
0 === false;         // false

null == undefined;   // true  (special language specification rule)
null === undefined;  // false (distinct types)

// Objects compare by memory reference, never structural value:
[1] == [1];          // false
//{} === {};           // false

// Equality: == vs. ===
// == (Loose / Abstract Equality): Compares values after implicit type coercion. If types differ, JavaScript converts one or both operands according to ECMAScript coercion rules.
// === (Strict Equality): Compares both value and type without type conversion. If types differ, it immediately evaluates to false.

// ! Inequality: != vs. !==
//- != (Loose Inequality): Coerces types before testing inequality. Returns false if values can be converted to match.
//- !== (Strict Inequality): Tests inequality without coercion. Returns true if types differ OR values differ.
5 != "5";    // false (they coerce to equal values)
5 !== "5";   // true  (different types)

null != undefined;  // false
null !== undefined; // true