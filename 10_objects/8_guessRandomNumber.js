const prompt = require('prompt-sync')();
// const name = prompt('What is your name : ');
// console.log(`Hello, ${name}`);
while(1){
    console.log("Enter 0 to Exit");
    const guess = Number(prompt("Enter your number: "));
    const random = Math.floor(Math.random() * 10) + 1;
    if(guess === 0)break;

    else if( random === guess){
        console.log("Your guess is correct.");
        break;
    }else{
        console.log(`Your guess is incorrect. correct guess is ${random}`);
    }
}


