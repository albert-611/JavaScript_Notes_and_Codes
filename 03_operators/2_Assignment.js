let x = 10;

x += 5;   // x = x + 5  -> 15
console.log(x);
x -= 3;   // x = x - 3  -> 12
console.log(x);
x *= 2;   // x = x * 2  -> 24
console.log(x);
x /= 4;   // x = x / 4  -> 6
console.log(x);
x %= 4;   // x = x % 4  -> 2
console.log(x);
x **= 3;  // x = x ** 3 -> 8
console.log(x);

// Logical Assignment (ES2021)
let a = null;
a ??= 20; // Assigns 20 only because a is null/undefined -> 20
console.log(a);

let b = 1;
b &&= 5;  // Assigns 5 only because b is truthy -> 5
console.log(b);

let c = 0;
c ||= 10; // Assigns 10 only because c is falsy -> 10
console.log(c);