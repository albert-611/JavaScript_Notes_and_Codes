// When break is encountered in a loop, the loop terminates immediately.
// The program control is transfered to the statements following the loop.
// No more loop iterations are executed.

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "\n";
}

console.log(text);
