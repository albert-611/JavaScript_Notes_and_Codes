function sayHello(name, age){

    console.log(`Hello ${name}, your age is ${age}.`);
}sayHello("Albert", 22);

function avg(a, b, c){
    console.log(Math.round((a + b + c)/3));
}avg(1,4,9);

console.log(typeof(avg));

function PrintTable(n){
    for(let i = n; i<=n*10; i+=n){
        console.log(i);
    }
}PrintTable(2);