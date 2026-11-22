const fruits = [['apple', 'banana', 'jackfruit', 'fig', 'coconut'], ['orange', 'grapes', 'lemon', ]];

for(let i = 0; i < fruits.length; i++){
    console.log(`List #${i} : `);
    for(let j = 0; j<fruits[i].length;j++){
        console.log(fruits[i][j]);
    }
}