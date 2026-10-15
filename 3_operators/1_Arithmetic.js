let a = 5, b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log(7 % 3);    // 1
console.log(-7 % 3);   // -1 (sign matches dividend)
console.log(7 % -3);   // 1  (sign matches dividend)

console.log(2 ** 4);   // 16
console.log(16 ** 0.5);// 4  (square root)


// Special IEEE 754 numeric cases:
console.log(5 / 0);      // Infinity
console.log(-5 / 0);     // -Infinity
console.log(0 / 0);      // NaN
console.log("text" * 2); // NaN (cannot coerce text to number)

// ! Adding Strings and Numbers
console.log(5 + "5");       // "55"   (number 5 coerced to "5")
console.log(1 + 2 + "3");   // "33"   (1 + 2 = 3; 3 + "3" = "33")
console.log("1" + 2 + 3);   // "123"  ("1" + 2 = "12"; "12" + 3 = "123")
console.log(true + " peace");// "true peace"