"use strict";
// get the buttons
let showFormBtn = document.querySelector('.btn1');
let hideFormBtn = document.querySelector('.btn2');
// get divs
let introDiv = document.querySelector('.introDiv');
let formDiv = document.querySelector('.formDiv');
showFormBtn.addEventListener('click', () => {
    introDiv.style.display = 'none';
    formDiv.style.display = 'block';
});
hideFormBtn.addEventListener('click', () => {
    introDiv.style.display = 'flex';
    formDiv.style.display = 'none';
});


