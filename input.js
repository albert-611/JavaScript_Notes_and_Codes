const prompt = require('prompt-sync')();

const name = prompt('What is your name : ');
console.log(`Hello, ${name}`);

const number = Number(prompt('Enter a number : '));
console.log(`Square is ${number * number}`);