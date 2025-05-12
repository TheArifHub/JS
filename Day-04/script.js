// Hoisting

// behaviour in var keyword
console.log(number);
var number = 4;
console.log(number);

// behaviour in let keyword
// console.log(letNumber); // ReferenceError: Cannot access 'letNumber' before initialization
let letNumber = 5;
console.log(letNumber);

// behaviour in const keyword
// console.log(constNumber); //ReferenceError: Cannot access 'constNumber' before initialization
const constNumber = 10;
console.log(constNumber);

// function
greeting();

function greeting() {
  console.log("Hello !");
}
greeting();

// behaviour in class

// const obj = new Human(); // ReferenceError: Cannot access 'Human' before initialization

class Human {}

// function with expression

console.log(varFunction); // undefined

var varFunction = function () {
  console.log("From var function");
};

// console.log(letFunction); //ReferenceError: Cannot access 'letFunction' before initialization

let letFunction = function () {
  console.log("From let Function");
};

// console.log(constFunction); //ReferenceError: Cannot access 'constFunction' before initialization

let constFunction = function () {
  console.log("From const Function");
};

// Loops

// 1. for loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop

let num = 123;
let sum = 0;
while (num != 0) {
  let rem = num % 10;
  sum = sum + rem;
  num = num / 10;
}
console.log(sum);

// do while loop
let doNumber = 123;
let doSum = 0;
do {
  let rem = doNumber % 10;
  doSum += rem;
  doNumber = Math.floor(doNumber / 10);
} while (doNumber != 0);

console.log(doSum); // 6

// for in loop

const details = {
  name: "Arif",
  age: 22,
  location: "Bengaluru",
};

for (let key in details) {
  console.log(key + ":" + details[key]);
}

// for off loop

let colors = ["Red","Green","Blue"]

for(let color of colors)
{
    console.log(color);
}


// GEC

var a = 2;

function square(num)
{
    var ans = num * num;
    return ans;
}

var res = square(a);
console.log(squareAnswer);


