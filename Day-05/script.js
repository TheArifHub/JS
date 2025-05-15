// DOM


// Accessing Elements:

// **********************************
// 1. getElementById()

// let headingElement = document.getElementById('heading');
// console.log(headingElement);

// headingElement.style.backgroundColor = 'red';

// ************************************************

// 2. getElementsByClassName()

// let boxElement = document.getElementsByClassName('box');
// console.log(boxElement); // returns an array

// boxElement[0].style.backgroundColor = 'blue';
// boxElement[0].style.height = '200px';
// boxElement[0].style.width = '200px';


// ************************************************


// 3. getElementsByTagName()

// let nameElement = document.getElementsByTagName('p');
// console.log(nameElement); // returns an array

// nameElement[0].style.backgroundColor = 'lightseagreen';
// nameElement[0].style.color = 'white';

// nameElement[1].style.backgroundColor = 'hotpink';
// nameElement[1].style.color = 'black';

// nameElement[2].style.backgroundColor = 'green';
// nameElement[2].style.color = 'white';


// ************************************************



// Query Selectors

// 1. querySelector()

let element = document.querySelector(".topic");
      
element.style.backgroundColor = "yellow"; // it is changed to first one only

// 2. querySelectorAll()

let elementOne = document.querySelectorAll("div");
console.log(elementOne); // returns array


elementOne[3].style.backgroundColor = "lightseagreen";

