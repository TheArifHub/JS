// Event 

// JavaScript Property

// const btn = document.querySelector(".btn");
// btn.onclick = () =>{
//     alert("Hello!")
// }

// Event Listener 

const btn = document.querySelector(".btn");
const heart = document.querySelector("span");

function messageAdd(){
    alert("Button Clicked");
}

function removeEvent()
{
    btn.removeEventListener('click',messageAdd);
    alert("Event Lisetener Removed");
}

btn.addEventListener('click', messageAdd);

heart.addEventListener('click',removeEvent);


