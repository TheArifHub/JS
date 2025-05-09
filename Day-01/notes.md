# 🌐 JavaScript - The Language of the Web

JavaScript is a **scripting language** and an **interpreted language** that is used to bring functionality to web pages. It helps make web pages **interactive and dynamic**.

JavaScript was invented by **Brendan Eich** in the year **1995**.

---

## ✨ Features of JavaScript

* 🌟 **Synchronous in Nature** - Executes line by line.
* 🔎 **Loosely Typed** - Variable types are determined during runtime.
* ✍️ **Scripting Language** - Lightweight and easily integrated into HTML.
* 🎯 **Event Driven** - Responds to user actions like clicks or keypresses.
* ⚡ **Lightweight** - Designed to be fast and efficient.

---

## 📝 How to Write JavaScript Code

JavaScript code can be written in three ways:

### 1️⃣ Inline JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Inline JavaScript Example</title>
</head>
<body>

  <h2>Click the button:</h2>

  <button onclick="alert('Hello, Arif!')">Click Me</button>

</body>
</html>
```

### 2️⃣ Internal JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript Example</title>
  <script>
    function sayHello() {
      alert("Hello from internal JavaScript!");
    }
  </script>
</head>
<body>

  <h2>Click the button:</h2>

  <button onclick="sayHello()">Click Me</button>

</body>
</html>
```

### 3️⃣ External JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>External JavaScript Example</title>
</head>
<body>

  <h2>Click the button:</h2>

  <button onclick="showMessage()">Click Me</button>

  <script src="script.js"></script>

</body>
</html>
```

**script.js** file:

```javascript
function showMessage() {
  alert("Hello from external JavaScript!");
}
```

---

## 🔄 How to Declare a Variable in JavaScript

We can declare variables using three keywords: `var`, `let`, and `const`. Prior to 2015, `var` was the primary way to declare variables. In **2015**, ECMAScript introduced `let` and `const` with the release of **ES6**.

---

## 🔹 `var`

* 📌 **Function-scoped**.

```javascript
var userName = "Arif";

function details() {
  var age = 18;
  console.log(age); // 18
  console.log(userName); // Arif
}

details();
// console.log(age); // Throws ReferenceError: age is not defined
console.log(userName); // Arif
```

> When we declare a variable using var inside a function, we canot access the variable outside the function.

* 📌 **Not Block-scoped**

```javascript
var a = 10;
{
  var b = 20;
  console.log(a); // 10
  console.log(b); // 20
}
console.log(b); // 20
console.log(a); // 10
```

* 📌 **Allows Declaration and Initialization Separately**

```javascript
var num;
num = 7;
console.log(num); // 7
```

* 📌 **Allows Re-declaration and Re-initialization**

```javascript
var name = "Arif";
console.log(name); // Arif

var name = "Mohammed Arifulla";
console.log(name); // Mohammed Arifulla

var house = 45;
console.log(house); // 45

house = "White House";
console.log(house); // White House
```

> **⚠️ Note:** `var` is generally avoided in modern JavaScript due to its quirks with scoping and hoisting. `let` and `const` are preferred.

---

## 🔹 `let`

* 📌 **Block-scoped** - Only accessible within the block it is declared.

```javascript
let digitOne = 10;

if (true) {
  let digitTwo = 20;
  console.log(digitOne); // 10
  console.log(digitTwo); // 20
}

console.log(digitOne); // 10
console.log(digitTwo); // ❌ ReferenceError
```

* 🚫 **No Re-declaration** in the same scope.

```javascript
let numOne = 5;
// let numOne = 10; // ❌ SyntaxError

numOne = 10; // ✅ Re-initialization is allowed
console.log(numOne); // 10
```

* 🚀 **Hoisted but in Temporal Dead Zone (TDZ)**

```javascript
console.log(Number); // ❌ ReferenceError
let Number = 1;
console.log(Number); // 1
```

---

## 🔹 `const`

* 🔒 **Block-scoped** just like `let` but cannot be re-initialized or re-declared.

```javascript
const pi = 3.14;
console.log(pi); // 3.14
```

### 📌 \*\*Objects and Arrays with \*\***`const`**

```javascript
const person = { name: "Arif", age: 23 };

// Modifiaction in the content is allowed

person.age = 25; // ✅ Allowed
console.log(person); // { name: 'Arif', age: 25 }

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
console.log(numbers); // [1, 2, 3, 4]

// But re-initialization is not allowed

// ❌ numbers = [5, 6]; // TypeError: Assignment to constant variable.
```

---

## ✅ Best Practices

* Prefer `const` if the variable does not change.
* Use `let` if the value needs to be updated.
* Avoid using `var` to prevent scoping issues.
* Always initialize variables to avoid `undefined` errors.

---
