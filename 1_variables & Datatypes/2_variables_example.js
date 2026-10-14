// ! Scope (global and function)

let globalVal = "I am global";

{
  let blockVal = "I am local";
  var leakedVal = "I escape the block";
  console.log(globalVal);
}

//console.log(blockVal); // ReferenceError: blockVal is not defined
console.log(leakedVal);   // "I escape the block"


// ! Variable Hoisting Basics

console.log(a); // undefined
var a = 5;

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// ! Temporal Dead Zone (TDZ)

// * The Temporal Dead Zone is the region of code from the start of a block -
// * until the point where a let or const variable is declared and initialized.

{
  // --- TDZ for x begins ---
  // --- TDZ for message begins ---
  // console.log(message); // Throws ReferenceError
  
  let x = 10; // --- TDZ for x ends here --- // message is still in TDZ
  
  let message = "Hello"; // --- TDZ for message ends here ---
  console.log(message + " Developers");  // "Hello"
}