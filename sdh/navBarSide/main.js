'use strict';

const openBtn = document.querySelector(".nav-open")
const closeBtn = document.querySelector(".nav-close")
const sideBtn = document.querySelector(".side-bar")

openBtn.addEventListener("click",function(){
  if(!sideBtn.classList.contains("on")) {
    sideBtn.classList.add("on")
  }else {
    sideBtn.classList.remove("on")
  }
})

closeBtn.addEventListener("click",function(){
  sideBtn.classList.remove("on")
})
