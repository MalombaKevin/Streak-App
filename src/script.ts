// get the buttons
 
let showFormBtn = document.querySelector('.btn1') as HTMLButtonElement
let hideFormBtn = document.querySelector('.btn2') as HTMLButtonElement

// get divs to be toggled

let introDiv = document.querySelector('.introDiv') as HTMLDivElement
let formDiv = document.querySelector('.formDiv') as HTMLDivElement

// add event listeners
showFormBtn.addEventListener('click', ()=>{

    introDiv.style.display ='none'
    formDiv.style.display='flex'
})

hideFormBtn.addEventListener('click', ()=>{

    introDiv.style.display ='flex'
    formDiv.style.display='none'
})


//get form, form data, create the