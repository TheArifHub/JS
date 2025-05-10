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











