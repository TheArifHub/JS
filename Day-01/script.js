// in var we can Declare and we can Initialization in differnet line also

// Declaration
var num;
// Initialization
num = 7;

console.log(num); // 7

// we can do both  declaration and Initialization in the same line also

var num1 = 50;
console.log(num1);

// Re-Declaration

var name = "Arif";
console.log(name); // Arif

var name = "Mohammed Arifulla";
console.log(name); // Mohammed Arifulla

// Re-Inisalization

var house = 45;
console.log(house); // 45

house = "White House";
console.log(house); // White House

// var is not block-scoped
// example:-
var a = 10;
{
  var b = 20;
  console.log(a);
  console.log(b);
}
console.log(b);
console.log(a);

// var is funication-scoped
// when we declare a variable using var inside a function, we canot access the variable outside the function.
var userName = "Arif";

function details() {
  var age = 18;
  console.log(age); // 18
  console.log(userName); // Arif
}
details();
// console.log(age); // throws ReferenceError: age is not defined
console.log(userName); // line will not execute (synchronous and single-threaded)



/*************************************************** */


//let
// In let re-declaration is not possible

let numOne = 5;
console.log(numOne);

// Re-Declaration
// let numOne = 10; // throws SyntaxError: Identifier 'numOne' has already been declared

{
    let numOne = 10;
    console.log(numOne);
    
}

// Re-Initialization is possible
let numTwo = 10;
console.log(numTwo); // 10
// Re-Initialization
numTwo = "Ten";
console.log(numTwo); // Ten

// let keyword is used to declare variable that are block-scoped

let digitOne = 10;

if (true) {
  let digitTwo = 20;
  console.log(digitOne); // 10
  console.log(digitTwo); // 20
}
console.log(digitOne); // 10
// console.log(digitTwo);   //throws ReferenceError: digitTwo is not defined


// Hoisted but in Temporal Dead Zone (TDZ) 

// console.log(Number); // throws ReferenceError: Cannot access 'Number' before initialization
let Number = 1;
console.log(Number); // 1 

// It is hoisted, but not accessible before the declaration line trying to access it results in a ReferenceError.


/*************************************************** */

// const

// Declaration and Initialization in a single line is mandatory
const NumberOne = 55;
console.log(NumberOne);

// Re-Declaration is not allowed

const car = "bmw"; 

// const car = "audi"; // throws SyntaxError: Identifier 'car' has already been declared


// Re-Initialization is not allowed

const bike = "pulsar";
// bike = "R15"; // throws TypeError: Assignment to constant variable.

// block-scoped

function colors(){
    const col = "red";
    console.log(col); // red
}
colors();
// console.log(col);  // throws ReferenceError: col is not defined
// It is only accessible inside the block {} where it is declared.

// Hoisting Behavior (with TDZ)

// console.log(phone); // throws ReferenceError: Cannot access 'phone' before initialization

const phone = "Iphone";
console.log(phone); // Iphone
//It is hoisted, but not accessible before the declaration line trying to access it results in a ReferenceError.

// objects and arrays with const

const person = {
    name : "Arif",
    age : 23
}

// modifiaction in the content is allowed
person.age = 18;
console.log(person);

// but re-initialization is not allowed

// person = {}; // throws TypeError: Assignment to constant variable.

const numbers = [1,2,3];

numbers.push(4);
console.log(numbers);

// numbers = [5,6]; // throws TypeError: Assignment to constant variable.
// With objects and arrays, you cannot re-initialize the entire object or array, but you can still modify its contents.



