// ! push() insert at the back
let cars = ["audi", "bmw", "xuv", "suzuki"];
console.log(cars);
cars.push("toyota");
console.log(cars);
cars.push("ferrari");
console.log(cars);

// ! pop() poped from the back
let deletedCar = cars.pop();
console.log("Deleted Car : ",deletedCar);
console.log("Final Array is : ", cars);
cars.pop();

// ! unshift() insert at the front
console.log("Original Arrays : ", cars);
cars.unshift("toyta");
console.log(cars);

// ! shift() poped from the front
cars.shift();
cars.shift();
console.log(cars);

// ! indexOf() array.indexOf(searchElement, fromIndex)

const fruits = ['apple', 'banana', 'mango', 'banana', 'orange'];

console.log(fruits.indexOf('mango'));    // Output: 2
console.log(fruits.indexOf('banana'));   // Output: 1 (returns the *first* match)
console.log(fruits.indexOf('grape'));    // Output: -1 (not found)

// Starting the search from index 2
console.log(fruits.indexOf('banana', 2)); // Output: 3

// ! includes(); array.includes(searchElement, fromIndex)
let fruit = ['apple', 'banana', 'mango', 'orange'];

console.log(fruit.includes('mango'));   // Output: true
console.log(fruit.includes('grape'));   // Output: false

// Starting the search from index 3
console.log(fruit.includes('apple', 3)); // Output: false

// ! Concat() // concatenation

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2, [5, 6]);

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr1); // Output: [1, 2] (original is unchanged)
console.log(arr2); // Output: [3, 4] (original is unchanged)

// ! reverse()
const numbers = [1, 2, 3, 4];
numbers.reverse();

console.log(numbers); // Output: [4, 3, 2, 1] (original array is changed)

// ! slice
const fruits1 = ['apple', 'banana', 'mango', 'orange', 'grape'];

// Extracts from index 1 up to (but not including) index 4
const citrus = fruits1.slice(1, 4);

console.log(citrus); // Output: ['banana', 'mango', 'orange']
console.log(fruits1); // Output: ['apple', 'banana', 'mango', 'orange', 'grape'] (unchanged)

// ! splice
const colors = ['red', 'green', 'blue'];

// At index 1, delete 0 elements, and insert 'yellow'
colors.splice(1, 0, 'yellow');
console.log(colors); // Output: ['red', 'yellow', 'green', 'blue']

// At index 2, delete 1 element ('green')
colors.splice(2, 1);
console.log(colors); // Output: ['red', 'yellow', 'blue']

// ! sort()
// Sorting strings
const names = ['Charlie', 'Alice', 'Bob'];
names.sort();
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// Sorting numbers correctly
const scores = [40, 100, 1, 5, 25];
scores.sort((a, b) => a - b); // Ascending order
console.log(scores); // Output: [1, 5, 25, 40, 100]

const scores1 = [40, 100, 1, 5, 25];

scores.sort((a, b) => b - a); // Descending order

console.log(scores1); // Output: [100, 40, 25, 5, 1]

