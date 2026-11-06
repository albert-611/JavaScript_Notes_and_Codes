const fruits = ["mango","apple" , "banana", "litchi", "orange"];

for(let i = 0; i < fruits.length; i++){
    console.log(i," ", fruits[i]);
}
console.log();
for(let i = 1; i < fruits.length; i++){
    console.log(i," ", fruits[i]);
}
console.log();
for(let i = 0; i <= fruits.length; i++){
    console.log(i," ", fruits[i]);
}
console.log();
for(let i = 1; i <= fruits.length; i++){
    console.log(i," ", fruits[i]);
}

console.log("\nEven indices");
for(let i = 0; i < fruits.length; i=i+2){
    console.log(i," ", fruits[i]);
}

console.log("\nOdd indices");
for(let i = 1; i < fruits.length; i=i+2){
    console.log(i," ", fruits[i]);
}


