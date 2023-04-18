'use strict';

let count = 0;

let value = document.querySelector("#value");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let increaseBtn = document.querySelector(".increase");

const updateCount = () => {
  value.textContent = count;
  if(count > 0) {
    value.style.color = "green"
  } else if (count < 0) {
    value.style.color = "red"
  } else {
    value.style.color = "#222";
  }
}

increaseBtn.addEventListener("click",function(){
  count++;
  updateCount();
})
resetBtn.addEventListener("click",function(){
  count = 0;
  updateCount();
})
decreaseBtn.addEventListener("click",function(){
  count--;
  updateCount();
})


