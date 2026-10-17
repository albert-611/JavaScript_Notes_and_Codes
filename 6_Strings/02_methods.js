// ! trim

let mssg = "        albert        ";
console.log("Original:",mssg);
console.log("this is trim()",mssg.trim());


// ! toUpperCase // ! toLowerCase

let firstName = "AlbERt smiTH";

// Convert to uppercase
let upperName = firstName.toUpperCase();
console.log("Uppercase:", upperName);

// Convert to lowercase
let lowerName = firstName.toLowerCase();
console.log("Lowercase:", lowerName);


// ! indexOf

let message = "Hello, welcome to JavaScript!";

// Find the index of a word
let indexWelcome = message.indexOf("welcome");
console.log("Index of 'welcome':", indexWelcome); // Output: 7

// Find the index of a character
let indexComma = message.indexOf(",");
console.log("Index of ',':", indexComma); // Output: 5

// If the search term doesn't exist, it returns -1
let indexMissing = message.indexOf("Python");
console.log("Index of 'Python':", indexMissing); // Output: -1


// ! Methods Chaining
let userInput = "         Albert smith              ";
// Method chaining: trim the spaces, then convert to uppercase
let formattedName = userInput.trim().toUpperCase();

console.log("Formatted Name:", formattedName);


// ! slice
let message1 = "HelloWorld, JavaScript!";

// 1. Slice from index 0 to 5 ("Hello")
let greeting = message1.slice(0, 5);
console.log(greeting); // Output: Hello

// 2. Slice starting from index 7 to the end ("JavaScript!")
let lang = message1.slice(16);
console.log(lang); // Output: JavaScript!

// 3. Using negative indices (counts from the end of the string)
// -11 extracts from 11 characters before the end
let lastWord = message1.slice(-11,-3); 
console.log(lastWord); // Output: JavaScript

lastWord = message1.slice(-11); 
console.log(lastWord); // Output: JavaScript!

// ! repeat()
let text1 = "Ha";

// Repeat the string 3 times
let laugh = text1.repeat(3);

console.log(laugh); 
// Output: HaHaHa

// Repeating a separator for formatting
let divider = "-".repeat(20);
console.log(divider); 
// Output: --------------------

// ! replace()
message = "I like apples, and apples are healthy.";
console.log(message);
// 1. replace() — only changes the FIRST occurrence
let newMsg1 = message.replace("apples", "oranges");
console.log(newMsg1); 
// Output: I like oranges, and apples are healthy.

// 2. replaceAll() — changes EVERY occurrence
let newMsg2 = message.replaceAll("apples", "oranges");
console.log(newMsg2); 
// Output: I like oranges, and oranges are healthy.

// !==========================================
// !JAVASCRIPT STRING METHODS — MASTER CODE (WITH OUTPUTS)
// !==========================================

let str = "  Hello JavaScript World!  ";
let text = "Hello";
let anotherText = "JavaScript";

// 1. LENGTH (Property, not a method)
console.log("1. length:", str.length); 
// Output: 1. length: 27 (includes whitespace/non-breaking spaces)

// 2. CHARACTER ACCESS
console.log("2. charAt:", text.charAt(1)); 
// Output: 2. charAt: e
console.log("3. charCodeAt:", text.charCodeAt(1)); 
// Output: 3. charCodeAt: 101 (UTF-16 code for 'e')
console.log("4. codePointAt:", text.codePointAt(1)); 
// Output: 4. codePointAt: 101
console.log("5. at:", text.at(-1)); 
// Output: 5. at: o (last character using negative indexing)

// 3. SEARCHING
console.log("6. indexOf:", str.indexOf("JavaScript")); 
// Output: 6. indexOf: 8
console.log("7. lastIndexOf:", str.lastIndexOf("o")); 
// Output: 7. lastIndexOf: 22 (index of 'o' in "World!")
console.log("8. includes:", str.includes("World")); 
// Output: 8. includes: true
console.log("9. startsWith:", text.startsWith("He")); 
// Output: 9. startsWith: true
console.log("10. endsWith:", text.endsWith("lo")); 
// Output: 10. endsWith: true
console.log("11. search:", str.search(/JavaScript/)); 
// Output: 11. search: 8

// 4. EXTRACTING PARTS
console.log("12. slice:", text.slice(1, 4)); 
// Output: 12. slice: ell (from index 1 up to 4)
console.log("13. substring:", text.substring(1, 4)); 
// Output: 13. substring: ell
console.log("14. substr (legacy):", text.substr(1, 3)); 
// Output: 14. substr (legacy): ell (start index 1, length 3)

// 5. MODIFYING STRINGS
console.log("15. toUpperCase:", text.toUpperCase()); 
// Output: 15. toUpperCase: HELLO
console.log("16. toLowerCase:", text.toLowerCase()); 
// Output: 16. toLowerCase: hello
console.log("17. trim:", str.trim()); 
// Output: 17. trim: Hello JavaScript World!
console.log("18. trimStart:", str.trimStart()); 
// Output: 18. trimStart: Hello JavaScript World!  
console.log("19. trimEnd:", str.trimEnd()); 
// Output: 19. trimEnd:   Hello JavaScript World!
console.log("20. padStart:", text.padStart(8, "*")); 
// Output: 20. padStart: ***Hello
console.log("21. padEnd:", text.padEnd(8, "*")); 
// Output: 21. padEnd: Hello***
console.log("22. repeat:", text.repeat(3)); 
// Output: 22. repeat: HelloHelloHello

// 6. REPLACING
console.log("23. replace:", text.replace("l", "x")); 
// Output: 23. replace: Hexlo (replaces first 'l')
console.log("24. replaceAll:", "banana".replaceAll("a", "o")); 
// Output: 24. replaceAll: bonono

// 7. SPLITTING AND CONCATENATION
console.log("25. split:", "red,green,blue".split(",")); 
// Output: 25. split: ['red', 'green', 'blue']
console.log("26. concat:", text.concat(" ", anotherText)); 
// Output: 26. concat: Hello JavaScript

// 8. COMPARISON / LOCALIZATION
console.log("27. localeCompare:", "apple".localeCompare("banana")); 
// Output: 27. localeCompare: -1 (apple comes before banana)

// 9. REGULAR EXPRESSION MATCHING
console.log("28. match:", "cat bat rat".match(/at/g)); 
// Output: 28. match: ['at', 'at', 'at']
console.log("29. matchAll:", [..."cat bat".matchAll(/at/g)]); 
// Output: 29. matchAll: [RegExpStringIterator objects with match details for each 'at']

// 10. ITERATION
console.log("30. iterator:", [...text[Symbol.iterator]()]); 
// Output: 30. iterator: ['H', 'e', 'l', 'l', 'o']

// 11. STRING CONSTRUCTION (Static Methods)
console.log("31. String.fromCharCode:", String.fromCharCode(65, 66, 67)); 
// Output: 31. String.fromCharCode: ABC
console.log("32. String.fromCodePoint:", String.fromCodePoint(128512)); 
// Output: 32. String.fromCodePoint: 😀
console.log("33. String.raw:", String.raw`Hello\nWorld`); 
// Output: 33. String.raw: Hello\nWorld (preserves literal backslash)

// 12. MODERN STRING WELL-FORMEDNESS METHODS
console.log("34. isWellFormed:", "Hello".isWellFormed()); 
// Output: 34. isWellFormed: true
console.log("35. toWellFormed:", "Hello".toWellFormed()); 
// Output: 35. toWellFormed: Hello

// 13. STRING CONVERSION
console.log("36. toString:", text.toString()); 
// Output: 36. toString: Hello
console.log("37. valueOf:", text.valueOf()); 
// Output: 37. valueOf: Hello

// 14. HTML WRAPPER METHODS (Deprecated — avoid using)
console.log("38. anchor:", text.anchor("top")); 
// Output: 38. anchor: <a name="top">Hello</a>
console.log("39. big:", text.big()); 
// Output: 39. big: <big>Hello</big>
console.log("40. bold:", text.bold()); 
// Output: 40. bold: <b>Hello</b>
console.log("41. italics:", text.italics()); 
// Output: 41. italics: <i>Hello</i>
console.log("42. fixed:", text.fixed()); 
// Output: 42. fixed: <tt>Hello</tt>
console.log("43. fontcolor:", text.fontcolor("red")); 
// Output: 43. fontcolor: <font color="red">Hello</font>
console.log("44. fontsize:", text.fontsize(5)); 
// Output: 44. fontsize: <font size="5">Hello</font>
console.log("45. link:", text.link("https://example.com")); 
// Output: 45. link: <a href="https://example.com">Hello</a>
console.log("46. small:", text.small()); 
// Output: 46. small: <small>Hello</small>
console.log("47. strike:", text.strike()); 
// Output: 47. strike: <strike>Hello</strike>
console.log("48. sub:", text.sub()); 
// Output: 48. sub: <sub>Hello</sub>
console.log("49. sup:", text.sup()); 
// Output: 49. sup: <sup>Hello</sup>

// ==========================================
// END OF STRING METHODS MASTER CODE
// ==========================================