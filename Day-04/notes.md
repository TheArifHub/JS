# 🚀 Hoisting in JavaScript

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before code execution. This allows the use of variables and functions before their actual declaration in the code. It's important to note that only declarations are hoisted, not initializations. 

## 📌 Variable Hoisting

### `var` Keyword
For variables declared with `var`, hoisting means the variable is accessible before its declaration, but its value will be `undefined` until the line where it's actually initialized.

```javascript
console.log(number); // undefined
var number = 4;
console.log(number); // 4
```

### 🔄 Function Declarations
Function declarations are also hoisted, allowing them to be called before they are defined in the code.

```javascript
greeting(); // Hello !

function greeting() {
    console.log("Hello !");
}
greeting(); // Hello !
```

### ⚠️ `let` and `const` Keywords
Variables declared with `let` and `const` are hoisted differently. They are also moved to the top of their scope, but they are not initialized. Attempting to access them before their declaration results in a `ReferenceError`. This behavior is often referred to as the "temporal dead zone."

```javascript
// Behavior with let keyword
console.log(letNumber); // ❌ ReferenceError: Cannot access 'letNumber' before initialization
let letNumber = 5;
console.log(letNumber); // 5

// Behavior with const keyword
console.log(constNumber); // ❌ ReferenceError: Cannot access 'constNumber' before initialization
const constNumber = 10;
console.log(constNumber);  // 10
```

### 🏛️ Class Declarations
Class declarations are also hoisted, but similar to `let` and `const`, they are not initialized and attempting to access them before their declaration results in a `ReferenceError`.

```javascript
const obj = new Human(); // ❌ ReferenceError: Cannot access 'Human' before initialization

class Human {
    // class body
}
```

### 🧩 Function Expressions
Let's examine what happens with function expressions. With `var`, `let`, and `const` keywords, function expressions behave the same as variable declarations discussed above:

```javascript
console.log(varFunction); // undefined

var varFunction = function() {
    console.log("From var function");
}

console.log(letFunction); // ❌ ReferenceError: Cannot access 'letFunction' before initialization

let letFunction = function() {
    console.log("From let Function");
}

console.log(constFunction); // ❌ ReferenceError: Cannot access 'constFunction' before initialization

const constFunction = function() {
    console.log("From const Function");
}
```

# 🌐 GEC (Global Execution Context)

In JavaScript, GEC refers to the Global Execution Context. It is the default execution context created by the JavaScript engine when a script file is loaded in a browser or when JavaScript code is run in a Node.js environment. The GEC is the base context for all JavaScript code that is not enclosed within a function.

## 🔄 Phases of GEC

The GEC has two phases:

### 1️⃣ Creation Phase:
In this phase, the JavaScript engine allocates memory for variables and functions. Variables declared with `var` are initialized with `undefined`, while function declarations are stored in memory.

### 2️⃣ Execution Phase:
In this phase, the JavaScript engine executes the code line by line. Variables are assigned their actual values, and functions are invoked when called.

The GEC also creates a global object, which is `window` in browsers and a similar object in Node.js. The `this` keyword in the GEC refers to the global object.

Each function invocation creates its own Function Execution Context (FEC), which is placed on top of the call stack. When the function execution is complete, the FEC is removed from the stack, and control returns to the GEC or the calling function's context.

There is only one GEC for each JavaScript file, as the JavaScript engine is single-threaded.

```javascript
var a = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var squareAnswer = square(a);
console.log(squareAnswer);
```
![GEC Example](./GEC%20Example.jpg)

# 🔄 Loops in JavaScript

A loop is a programming structure that repeats a block of code as long as a specified condition is true. This helps avoid code repetition and makes the code efficient and readable.

## 🔢 Types of Loops in JavaScript

### 1. For Loop ➿
The for loop is used when the number of iterations is known beforehand.

Syntax:
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```
Example:
```javascript
for(let i = 1; i <= 5; i++) {
    console.log(i); // 1, 2, 3, 4, 5
}
```

### 2. While Loop 🔄
The while loop repeats as long as the condition is true.

Syntax:
```javascript
while (condition) {
    // Code to execute
}
```

Example:
```javascript
let num = 123;
let sum = 0;
while(num != 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10); // Fixed: Need to use Math.floor for integer division
}
console.log(sum); // 6
```

### 3. Do...While Loop 🔁
The do...while loop executes the code at least once before checking the condition.

Syntax:
```javascript
do {
    // Code to execute
} while (condition);
```
Example:
```javascript
let doNumber = 123;
let doSum = 0;
do {
    let rem = doNumber % 10;
    doSum += rem;
    doNumber = Math.floor(doNumber / 10);
} while(doNumber != 0);

console.log(doSum); // 6
```

### 4. For...In Loop 🔍
Used to iterate over the properties of an object.

Syntax:
```javascript
for (let key in object) {
    // Code to execute
}
```
Example:
```javascript
const details = {
  name: "Arif",
  age: 22,
  location: "Bengaluru",
};

for (let key in details) {
  console.log(key + ": " + details[key]);
}
```

### 5. For...Of Loop 📋
Used to iterate over iterable objects like arrays, strings, or NodeLists.

Syntax:
```javascript
for (let element of iterable) {
    // Code to execute
}
```
Example:
```javascript
let colors = ["Red", "Green", "Blue"];

for(let color of colors) {
    console.log(color);
}
```
