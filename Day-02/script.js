// 1.Camel Case

let fullName;
let userAge;
let phoneNumber;
let emailId;


// 2.Pascal Case

let FullName;
let UserAge;
let PhoneNumber;
let EmailId;


// 3.Snake Case

let full_name;
let user_age;
let phone_number;
let email_id;



// *****************************



// Types of operators

// 1. Arithmetic Operators

// Addition

let numOne = 10;
let numTwo = 20;

console.log(numOne + numTwo); // 30

// Subtraction

let a = 50;
let b = 25;

console.log(a - b); // 25

// Multiplication

let NumOne = 2;
let NumTwo = 5;

console.log(NumOne * NumTwo); // 10

// Exponentiation

let num_one = 5;
let num_two = 3;

// 5x5x5
console.log(num_one ** num_two); // 125

// Division

let digitOne = 5;
let digitTwo = 2;

console.log(digitOne / digitTwo); // 2.5

// Modulus

let DigitOne = 15;
let DigitTwo = 2;

console.log(DigitOne % DigitTwo); // 0

// 2. Assignment Operators

let name = "Arif";
let age = 18;

console.log(name);// Arif
console.log(age);// 18

// 3. Comparison Operators


let digit_one = 5;
let digit_two = '5';

// Loose Equality
console.log(digit_one == digit_two); // true

// Strict Equality
console.log(digit_one === digit_two); // false


// 4.Logical Operators


// AND (&&)

let temp_one = true;
let temp_two = true;
let temp_third = false;

console.log(temp_one && temp_two); // true

console.log(temp_one && temp_two && temp_third); // flase

// OR (||)

let tempOne = true;
let tempTwo = false;
let tempThird = false;

console.log(tempOne || tempTwo); // true
console.log(tempOne || tempTwo || tempThird); // true

// NOT (!)

let TempOne = true;
let TempTwo = false;
let TempThird = true;

console.log(TempOne != TempTwo); // true
console.log(TempOne != TempThird); // false

console.log(!TempOne); // flase
console.log(!TempTwo); // true


// 5.Ternary Operators

let my_age = 17;

(my_age >= 18) ? (console.log("I can Drive")) : (console.log("I can't Drive"));



// If else statements

let myAge = 17;

if(myAge >= 18)
{
    console.log("Men");
}else{
    console.log("boy");
}

let speed = 70;

if(speed <= 30)
{
    console.log("slow speed");
}else if(speed <= 50)
    {
    console.log("medium speed");
}else if(speed <= 70)
{
    console.log("High speed");
}else{
    console.log("Warring");
    
}