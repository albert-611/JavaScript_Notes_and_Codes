let a = 5;
let b = a++; 
console.log(b); // 5 (returned original value before incrementing)
console.log(a); // 6 (incremented afterwards)

let p = 5;
let q = ++p; 
console.log(q); // 6 (incremented first, then assigned)
console.log(p); // 6