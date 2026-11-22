const fruits = ["mango", "orange", "grapes", "apple", "jackfruits"];

for(fruit of fruits){
    console.log(fruit);
}


for(char of "albertsmithbala"){
    console.log(char);
}

//nested for-of loops
const hero = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder women', 'flash'], ['deadpool', 'x-man']];
for(list of hero){
    for(heros of list){
        console.log(heros);
    }
}