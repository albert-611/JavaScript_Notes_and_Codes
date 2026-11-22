const obj = {
    1: "a",
    2: "b",
    true : "c",
    null : "d",
    undefined : "e",
    love: "true"
}

console.log(obj);
console.log(obj[1]);
// In JavaScript, object property keys are strings or Symbols.
//When you use numbers, booleans, null, or undefined as object keys, 
//JavaScript automatically converts them into strings.

if(obj[1] === obj["1"]){
    console.log("yes");
}else{
    console.log("no");    
}


console.log(obj[2]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);

let love = "love";
console.log(obj[love]);

let loves = "loveyou";
console.log(obj[loves]);

