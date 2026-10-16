// ! break
// When break is encountered in a loop, the loop terminates immediately.
// The program control is transfered to the statements following the loop.
// No more loop iterations are executed.

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "\n";
}

console.log(text);

// ! Labeled Break
let text1 = "";
loop1: for (let j = 1; j < 5; j++){
  loop2: for (let i = 1; i < 5; i++){
    if (i === 3) { break loop1; }
    text1 += i + " ";
   }
}
console.log(text1);

let text2 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop2; }
    text2 += i + " ";
   }
}
console.log(text2);


// ! continue
let str = "";
for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  str += "The number is " + i + "\n";
}
console.log(str);

let str1 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    str1 += i + " ";
   }
}
console.log(str1);


let str2 = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    str2 += i + " ";
   }
}
console.log(str2);