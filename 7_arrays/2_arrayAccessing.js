let marks = [99, 66, 78, 34, 54]; 
//  marks = [0 , 1 , 2 , 3 , 4 ] indices of marks Arrays

console.log(marks.length); // 5 (total 5 elements in marks arrays)

console.log(marks[2]); // 78 
console.log(marks[4]); // 54 



let cars = ["Toyota", "Honda", "Ford"];
// Change "Honda" to "Tesla"
cars[1] = "Tesla";
console.log(cars); 
// Output: ['Toyota', 'Tesla', 'Ford']

let emtyArr = [];
console.log(emtyArr, emtyArr[0]);

emtyArr[0] = "siuu";
console.log(emtyArr);

let array = ["Toyota", "Honda", "BMW"];
console.log(array[0][4]);
console.log(array[1][2]);
console.log(array[2][2]);