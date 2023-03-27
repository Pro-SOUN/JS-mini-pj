"use strict";

const colors = ["green","red","rgba(133,122,200)","#f15025"]

const btn = document.getElementById("btn");
const getColor = document.querySelector(".color");

btn.addEventListener("click", ()=> {
  let randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  getColor.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
  let number =  Math.floor(Math.random() * colors.length)
  return number;
}


