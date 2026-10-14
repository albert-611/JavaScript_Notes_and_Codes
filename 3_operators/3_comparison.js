// String comparison uses lexicographical (Unicode point) ordering:
console.log("apple" < "banana"); // true ('a' comes before 'b')
console.log("10" < "2");         // true ('1' has smaller code point than '2')
console.log("10" < 2);           // false (String "10" coerces to Number 10)

console.log(5 > 2);  //true 
console.log(5 < 2);  //false
console.log(5 >= 2); //true 
console.log(5 <= 2); //false
console.log(5 != 2); //true