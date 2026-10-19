let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arr, arrCopy); // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ]

arr.push('d');
console.log(arr, arrCopy); // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c', 'd' ]
arrCopy.pop();
console.log(arr, arrCopy); // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ]
arrCopy.pop();
console.log(arr, arrCopy); // [ 'a', 'b' ] [ 'a', 'b' ]
