// setAttribute()

// let container = document.querySelector("div");
// container.setAttribute("class","box");
// console.log(container);
// container.setAttribute("style","background-color:red;");


// getAttribute()

// let container = document.querySelector("div");
// let value = container.getAttribute("id");
// console.log(value); // box



// insertAdjacentElement() 

let newContent = document.createElement("p");
newContent.textContent = "Hello this is";

let oldContent = document.querySelector("#box");

// beforebegin
// oldContent.insertAdjacentElement('beforebegin',newContent);

// afterbegin
// oldContent.insertAdjacentElement('afterbegin',newContent);

// beforeend
// oldContent.insertAdjacentElement('beforeend',newContent);

// afterend
// oldContent.insertAdjacentElement('afterend',newContent);







