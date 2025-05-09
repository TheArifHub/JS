""# 📌 Variable & Function Naming Conventions

Clear and meaningful variable names significantly enhance **readability** and **code quality**. Consistent naming conventions make debugging easier and improve overall code maintainability.

---

## ✨ Types of Naming Conventions

### 🔹 Camel Case

Typically used for variables and function names in JavaScript. The first word is lowercase, and subsequent words are capitalized.

```javascript
let fullName;
let userAge;
let phoneNumber;
let emailId;
```

### 🔹 Pascal Case

Used mainly for class names and constructor functions. Every word is capitalized.

```javascript
let FullName;
let UserAge;
let PhoneNumber;
let EmailId;
```

### 🔹 Snake Case

Commonly used in constants or database fields. All letters are lowercase and words are separated by underscores.

```javascript
let full_name;
let user_age;
let phone_number;
let email_id;
```

---

## 🔍 Types of Operators

### ➕ **1. Arithmetic Operators**

Used to perform basic mathematical operations like addition, subtraction, multiplication, etc.

```javascript
// Addition ➕
let numOne = 10;
let numTwo = 20;
console.log(numOne + numTwo); // Output: 30

// Subtraction ➖
let a = 50;
let b = 25;
console.log(a - b); // Output: 25

// Multiplication ✖️
let numThree = 2;
let numFour = 5;
console.log(numThree * numFour); // Output: 10

// Exponentiation (Power) 💡
let base = 5;
let exponent = 3;
console.log(base ** exponent); // Output: 125

// Division ➗
let digitOne = 5;
let digitTwo = 2;
console.log(digitOne / digitTwo); // Output: 2.5

// Modulus (Remainder) ➗
let valueOne = 15;
let valueTwo = 2;
console.log(valueOne % valueTwo); // Output: 1
```

---

### ✍️ **2. Assignment Operators**

Used to assign values to variables.

```javascript
let name = "Arif";
let age = 18;
console.log(name); // Output: Arif
console.log(age);  // Output: 18

// Compound Assignment Operators
let count = 10;
count += 5; // Same as count = count + 5
console.log(count); // Output: 15
```

---

### ⚖️ **3. Comparison Operators**

Used to compare two values, returning `true` or `false`.

```javascript
let digitOne = 5;
let digitTwo = '5';

// Loose Equality (==) - compares value only
console.log(digitOne == digitTwo); // Output: true

// Strict Equality (===) - compares value and type
console.log(digitOne === digitTwo); // Output: false

// Greater than, Less than
console.log(10 > 5); // Output: true
console.log(5 < 3);  // Output: false
```

---

### 🔗 **4. Logical Operators**

Used to perform logical operations and control flow.

```javascript
// AND (&&) - returns true if all are true
let tempOne = true;
let tempTwo = true;
let tempThree = false;

console.log(tempOne && tempTwo); // Output: true
console.log(tempOne && tempTwo && tempThree); // Output: false

// OR (||) - returns true if at least one is true
console.log(tempOne || tempThree); // Output: true
console.log(tempThree || tempThree); // Output: false

// NOT (!) - reverses the boolean value
console.log(!tempOne); // Output: false
console.log(!tempThree); // Output: true
```

---

### ❓ **5. Ternary Operator**

A shorthand for `if-else` statements.

```javascript
let myAge = 17;
console.log((myAge >= 18) ? "I can Drive 🚗" : "I can't Drive 🚫");
```

---

## 🌟 If-Else Statements

Conditional statements that execute blocks of code based on specific conditions.

```javascript
let myAge = 17;

if (myAge >= 18) {
    console.log("Man");
} else {
    console.log("Boy");
}

let speed = 70;

if (speed <= 30) {
    console.log("🚶 Slow Speed");
} else if (speed <= 50) {
    console.log("🚲 Medium Speed");
} else if (speed <= 70) {
    console.log("🚗 High Speed");
} else {
    console.log("⚠️ Warning: Over Speed");
}
```

---

### 🔄 **Switch Case**

Alternative to `if-else` for multiple conditions.

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}
```

---

