function sum (a, b){
    return a + b;
}console.log(sum(2,4));

// find max 
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let arr = [33, 4, 2 ,6, 32];
console.log(`Max Value is: ` ,findMax(arr));