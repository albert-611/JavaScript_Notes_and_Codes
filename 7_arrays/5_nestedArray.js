let arr = [[1], [2, 3, 4], [5, 6, 10, 13], [7, 8], [9, 0, 12, 12, 16, 17]];
console.log(arr, `The length of the arr is : ${arr.length}`);

console.log(arr[0], `The length of the arr is : ${arr[0].length}`);
console.log(arr[1], `The length of the arr is : ${arr[1].length}`);
console.log(arr[2], `The length of the arr is : ${arr[2].length}`);
console.log(arr[3], `The length of the arr is : ${arr[3].length}`);
console.log(arr[4], `The length of the arr is : ${arr[4].length}`);
console.log(arr[5], `The length of the arr is : Undefined (TypeError)arr[5].length`); // undefined

console.log(arr[2], arr[2][0],arr[2][1],arr[2][2]);
