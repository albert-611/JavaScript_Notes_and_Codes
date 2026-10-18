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