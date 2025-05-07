# 🚀 JavaScript Guide

JavaScript is a **scripting language** and an **interpreted language** that adds interactivity and functionality to web pages. It brings life to websites, making them more engaging and responsive.

JavaScript was invented by **Brendan Eich** in **1995**.

---

## ✨ Features of JavaScript

* 🔄 Synchronous in nature
* 📌 Loosely typed
* ✍️ Scripting language
* ⚡ Event-driven
* 🌐 Lightweight

---

## 📝 How to Write JavaScript Code

### 1️⃣ Inline JavaScript

You can write JavaScript directly within HTML elements using the `onclick` attribute:

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

For larger scripts, it's better to use the `<script>` tag within the HTML:

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

To keep your JavaScript separate from HTML, use an external file:

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

**script.js** (External JavaScript File)

```javascript
function showMessage() {
  alert("Hello from external JavaScript!");
}
```

---

## 🔍 How to Declare Variables in JavaScript

JavaScript provides three keywords for variable declaration: `var`, `let`, and `const`.
Before 2015, only `var` was available. In 2015, **ECMAScript 6 (ES6)** introduced `let` and `const`.

---

### 🟢 **var**

* Function-scoped (not block-scoped)
* Allows re-declaration and re-initialization

```javascript
var userName = "Arif";
var userName = "Mohammed Arifulla"; // ✅ No error
console.log(userName); // Mohammed Arifulla
```

---

### 🔵 **let**

* Block-scoped
* Does not allow re-declaration in the same scope
* Allows re-initialization

```javascript
let age = 25;
age = 26; // ✅ Allowed
let age = 30; // ❌ SyntaxError: Identifier 'age' has already been declared
```

---

### 🔴 **const**

* Block-scoped
* Requires initialization during declaration
* Does not allow re-declaration or re-initialization

```javascript
const car = "BMW";
car = "Audi"; // ❌ TypeError: Assignment to constant variable.
```

#### 📌 With objects and arrays:

You can **modify the contents**, but you **cannot re-assign** the variable:

```javascript
const person = {
    name: "Arif",
    age: 23
};
person.age = 24; // ✅ Allowed
person = {}; // ❌ TypeError: Assignment to constant variable.
```

```javascript
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
numbers = [5, 6]; // ❌ TypeError: Assignment to constant variable.
```

---

📝 **Note:**

* `var` is generally avoided in modern JavaScript because of its function-scoping behavior.
* Use `let` for variables that will change and `const` for values that should remain constant.
* Prefer `const` over `let` unless you know the value will change.

---

