'use strict';

// data
const reviews = [
  {
    id: 1,
    name: 'sSon1',
    job: 'web publisher',
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
    "1 Lorem ipsum dolor sit amet,consectetur adipisicing elit.Eum itaque libero modi nobis pariatur repudiandae voluptate? A at facilis similique!"
  },
  {
    id: 2,
    name: 'sSon2',
    job: 'web frontend',
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "2 Lorem ipsum dolor sit amet,consectetur adipisicing elit.Eum itaque libero modi nobis pariatur repudiandae voluptate? A at facilis similique!"
  },
  {
    id: 3,
    name: 'sSon3',
    job: 'app publisher',
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "3 Lorem ipsum dolor sit amet,consectetur adipisicing elit.Eum itaque libero modi nobis pariatur repudiandae voluptate? A at facilis similique!"
  },
  {
    id: 4,
    name: 'sSon4',
    job: 'developer',
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "4 Lorem ipsum dolor sit amet,consectetur adipisicing elit.Eum itaque libero modi nobis pariatur repudiandae voluptate? A at facilis similique!"
  }

]

// select items
const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const info= document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")
console.log(randomBtn)
