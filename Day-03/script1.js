// Objects

let student = {
    fullName : "Arif",
    age : 18,
    sec : 'A',
    rollNumber : 1234
}

console.log(typeof(student)); // object

console.log(student); // {fullName: 'Arif', age: 18, sec: 'A', rollNumber: 1234}

// We can access the properties of an object using:

// 1. Dot notation
console.log(student.fullName); // Arif

// 2. Bracket Notation
console.log(student['age']); // 18

// In objects we can change the properties 

// Adding a property
student.feesPaid = 17500.00;

// Modifying a property
student.age = 23;

// Deleting a property
delete student.sec;

console.log(student); // {fullName: 'Arif', age: 23, rollNumber: 1234, feesPaid: 17500}

// Objects can also contain functions as properties. These functions are often referred to as methods.

let employee = {
    "Full Name of Employee" : "Raj",
    "Age of Employee" : 26,
    "Salary of Employee" : 15000,
    "Education details" : function(){
        console.log("I have done B.E in CS branch");
        console.log("And Diploma in CS branch");
    }
}

console.log(employee);
console.log(employee['Education details']);


// Arrays

// We can create array in two ways 

// 1. Using Literals
let color = ["red","green","blue","white","black","brown"];

// 2. Using Constructor
let evenNumbers = new Array(2,4,6,8,10,12,14,16);


// we can access array using index
console.log(color[3]); // white

// we can modifiy array 
color[color.length-1] = "Pink";
console.log(color); // ['red', 'green', 'blue', 'white', 'black', 'Pink']

// we can check the length of the array
console.log(evenNumbers.length); // 8

// push() :- Adds one or more elements to the end of the array.
color.push("orange")
console.log(color);

// pop() :- Removes the last element from the array.
color.pop();
console.log(color);

// unshift() :- Adds one or more elements to the beginning of the array.
color.unshift("grey");
console.log(color);

// shift() :- Removes the first element from the array.
color.shift();
console.log(color);

// concat() :- Merges two or more arrays.
let color_evenNumber = color.concat(evenNumbers);
console.log(color_evenNumber);

// slice(start, end) :- Returns a shallow copy of a portion of an array.
let rgb = color.slice(0,3)
console.log(rgb);
console.log(color);

// splice(start, deleteCount, item1, item2, ...) :- Adds or removes elements.
let days = ["Mon", "Sat"];

days.splice(1,0,"Tue");
console.log(days);

days.splice(2,1,"Wed");
console.log(days);

// filter(callback) :- Creates a new array with elements that match the condition.

let numbers = [1,2,3,4,5,6,7,8,9,10,11];

function evenNumber(num)
{
    return num % 2 == 0;
}

let evenArray = numbers.filter(evenNumber);
console.log(evenArray);

// map(callback) :- Creates a new array with the results of calling a function.

let Numbers = [2,4,6,8];

let squares = Numbers.map(function(num)
{
    return num * num;
});

console.log(Numbers);
console.log(squares);

// reduce(callback, initialValue) :- Reduces the array to a single value.
let digits = [10,20,30,40];

let total = digits.reduce(function(last,current){
    return current + last;
});
console.log(total);




// Funcation

// 1. Anonymous Function :- An Anonymous Function in JavaScript is a function without a name. 

// function(){

// }
// ();

// Note:- we can't execute anonymous funcation


// 2. Named Function :- a function which is having name is called as named function.

let addition = function twoNum(num1, num2)
{
    return num1 + num2;
}

// arguments passed
console.log(addition(5,10)); // 15

// 3. Function with expression :- to execute Anonymous function, we need a function with expression, by assigning a anonymous function to the expression or the variable we can create a fucntion with expression.

let a = function(){
    console.log("Function with expression");
}

a();

// 4. first class function :- a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Assigning a function to a variable
let mul = function mullOfTwo(a,b)
{
    return a * b;
}
console.log(mul(2,2));


// Passing a function as an argument
function message()
{
    return "Hello";
}
function greeting(textMessage,name)
{
    console.log(textMessage(),name);
}
greeting(message,"Arif");



// Returning a function
function byeMessage(){
    return "Bye ";
}

function greetingMessage(text,name)
{
    return text() + name;
}
console.log(greetingMessage(byeMessage,"Arif"));


// 5. Arrow function :- Arrow functions, introduced in ES6, provide a shorter and cleaner syntax for writing functions. They are especially useful for writing simple one-line expressions.

let add = function(a,b){
    return a + b;
};
console.log(add(5,5)); // 10


// the line of code is reduced here we don't need to write return statement
let addArrow = (a,b) => a + b;
console.log(addArrow(10,10)); // 20

// when thier is a single argument passed to need to write the parentheses
let square = a => a * a;
console.log(square(2)); // 4

// we can use arrow function for multiple line also

let studnetDetial = (name,age,sec) => {
    console.log(`Name of the student : ${name}`);
    console.log(`Age of the student : ${age}`);
    console.log(`Sec of the studetn : ${sec}`);
}
studnetDetial("Arif",23,'A');

  




















