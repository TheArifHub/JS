// Data types

// 1. Primitive Data types

// Number

let intNumber = 20;
let floatNumber = 50.99;

console.log(typeof(intNumber)); // number
console.log(typeof(floatNumber)); // number

console.log(intNumber === floatNumber); // false
console.log(intNumber + floatNumber); // 70.9900000001

let strNumber = "40";

console.log(typeof(strNumber)); // string

// parseInt method converts string into number
console.log(typeof(parseInt(strNumber))); // number

let strfloat = "7.8";

console.log(typeof(strfloat)); // string
// parseFloat method converts string into number
console.log(typeof(parseFloat(strfloat))); // number

let numOne = "15";
let numTwo = 10;

console.log(numOne + numTwo); // 1510 (it concatenate's)
console.log(numOne - numTwo); // 5 (substraction is done)
console.log(numOne * numTwo); // 150 (multuplication is done)




// String

// In three ways we can create a string

let firstName = "Mohammed";
console.log(firstName); // Mohammed

let middleName = 'Arif';
console.log(middleName); // Arif

let lastName = `Ulla`;
console.log(lastName); // Ulla

// Concatenating strings
// There are three ways to concate a string 

// 1. with "+" operator
console.log(firstName + " " +middleName+ " " +lastName); //Mohammed Arif Ulla

// 2. String interpolation with template literals (Backticks ``)
console.log(`${firstName} ${middleName} ${lastName}`); //Mohammed Arif Ulla

// 3. with Concat() 
let fullName='';
console.log(fullName.concat(firstName," ",middleName," ",lastName)); //Mohammed Arif Ulla

// methods in js

let message = "Hello JavaScript !"

// printes the length of the string
console.log(message.length); // 18

// printes the character at the specified index.
console.log(message.charAt(6)); // J

// printes the Unicode of the character at the specified index.
console.log(message.charCodeAt(6)); // 74

// Converts the string to uppercase.
console.log(message.toUpperCase()); // HELLO JAVASCRIPT !

// Converts the string to lowercase.
console.log(message.toLowerCase()); // hello javascript !

// Removes whitespace from both sides of the string.
let message1 = "     Hello channel      "
console.log(message1);//      Hello channel 

console.log(message1.trim());// Hello channel

// Checks if a string contains a specified substring. Returns true or false.
console.log(message.includes("Hello")); // true
console.log(message1.includes("hello")); // false

// Checks if the string starts with the specified substring.
console.log(message.startsWith("Hel")); // true

// Checks if the string ends with the specified substring.
console.log(message.endsWith("!")); // true

// Extracts a part of the string and returns it as a new string.
console.log(message.slice(0,5)); // Hello
console.log(message.slice(-12)); // JavaScript !

// Similar to slice() but does not support negative indices.
console.log(message.substring(0,5)); // Hello

// Converts a value to a string.
let num = 123;
console.log(typeof(num.toString())); // string

// the split() method is used to split a string into an array of substrings based on a specified separator.
let text = "Hello this is arif";

let splittedArray = text.split(" ");

console.log(splittedArray); // ['Hello', 'this', 'is', 'arif']

// the join() method is used to concatenate all the elements of an array into a single string. This method joins array elements using a specified separator and returns the resulting string.

let stringArray = ['Hello','this','is','arif'];

let joinedString = stringArray.join(" ");
let joined_string = stringArray.join(); 

console.log(joinedString); // Hello this is arif
console.log(joined_string); // Hello,this,is,arif




// Boolean

let unmarried = false;
let married = true;

if(unmarried)
{
    console.log("Happy life");
}else{
    console.log("Un-happy life");
}

let number = 10;
let digit = 10;

console.log(number === digit); // true




// Undefined

let variableName;

console.log(variableName); // undefined


// Null

let temp = null

console.log(temp); // null
console.log(typeof(temp)); // object

































