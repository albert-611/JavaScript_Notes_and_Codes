// ! Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

    let arr = [7, 9, 0, -2];
    let n = 3;
    console.log(arr.slice(0, n));
// ! Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]
    arr = [7, 9, 0, -2];
    n = 3;
    console.log(arr.slice(-n));
// ! Qs3. Write a JavaScript program to check whether a string is blank or not.
    let str = "";
        if(str.trim().length === 0) console.log("Blank");
    str = "           ";
        if(str.trim().length === 0) console.log("Blank");
    str = "abc";
        if(str.trim().length === 0) console.log("Blank");
        else(console.log("Value present"));
    
// ! Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
    function isLower(str1, index){
        if(index < 0 || index > str1.length) return false;
        const char = str1.charAt(index);
        return char === char.toLowerCase() && char != char.toUpperCase();
    }
    console.log(isLower("Hello World", 0)); // false
    console.log(isLower("Hello World", 1)); // true
// ! Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
function stripSpaces(str) {
    return str.trim();
}
console.log(stripSpaces("   hello world   ")); // "hello world"

// ! Qs6. Write a JavaScript program to check if an element exists in an array or not.

function elementExists(arr, element){
    return arr.includes(element);
}
arr = [7, 9, 0, -2];
console.log(elementExists(arr, 7)); // true
console.log(elementExists(arr, 4)); // false