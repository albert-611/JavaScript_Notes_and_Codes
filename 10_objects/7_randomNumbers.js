// (range 1 - 10) console.log(Math.floor (Math.random() * 10) + 1);
// (range 1 - 100) console.log(Math.floor (Math.random() * 100) + 1);
// (range 1 - 1000) console.log(Math.floor (Math.random() * 1000) + 1);

for(let i = 0; i < 10; i++){
    console.log(Math.floor (Math.random() * 10) + 1);
}

console.log("\n2-9\n");
// Random Range (2-9)
let min = 2, max = 9;
for(let i = 0; i<10; i++){
    console.log(Math.floor(Math.random()* (max - min + 1)) + min);
}

