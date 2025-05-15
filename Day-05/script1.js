// Modifying HTML DOM elements

// innerHTML

// let container = document.getElementById("container");

// let content = container.innerHTML;
// console.log(content);

// let changeContent = "Element changed";
// container.innerHTML = changeContent;


// ********************************************************************


// innerText

// let container = document.getElementById("container");

// let example = container.innerText;
// console.log(example);

// let newText = "Hello what's up guys";
// container.innerText = newText;


// ********************************************************************


//outerHTML 

// let container = document.getElementById("container");
// let newContainer = container.outerHTML;
// console.log(newContainer);

// let newElement = "<h1>Arif here...!!!</h1>";
// container.outerHTML = newElement;



// ********************************************************************


// textContent

// let container = document.getElementById("container");
// let newContainer = container.textContent;
// console.log(newContainer);

// let newText = "Hiiiiiii";
// container.textContent = newText;


// ********************************************************************

// createElement()

// let elementOne = document.createElement("div");
// console.log(elementOne);

// let elementTwo = document.createElement("h1");
// console.log(elementTwo);




// ********************************************************************


// appendChild()

// let heading = document.createElement("h2");
// heading.textContent = "Hello...!";

// document.body.appendChild(para);


// ********************************************************************


// let parent = document.getElementById("box");
// let para = document.createElement("p");
// para.textContent = "Paragraph";

// parent.appendChild(para);


// ********************************************************************



// style

// let box = document.getElementById("box");
// box.style.backgroundColor = "lightseagreen";
// box.style.color = "white";


// cssText

let elementTwo = document.querySelector("h2");
elementTwo.style.cssText = 'color: white; font-size: 5rem; background-color: lightseagreen';


