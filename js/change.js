
const btn1 = document.querySelector("button");
const inputfield = document.querySelector("input");
const heading = document.querySelector("#container");




function myFunction(){

if(inputfield.value == ""){
var ifield = inputfield.placeholder = "it's empty!";
inputfield.style.backgroundColor = "rgb(255, 255, 255)";
}

else{
heading.innerHTML = `<h1>Thanks for subscribing to our newsletter, ${inputfield.value}!</h1>`;
heading.style.color = "white";
}



}
