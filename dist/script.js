import taskClass from "./classes/classTask.js";
import classStreak from "./classes/classStreak.js";
// get the buttons
let showFormBtn = document.querySelector('.btn1');
let hideFormBtn = document.querySelector('.btn2');
// get divs to be toggled
let introDiv = document.querySelector('.introDiv');
let formDiv = document.querySelector('.formDiv');
// get tasks display div
let taskDisplayDiv = document.querySelector('.section3');
// add event listeners
showFormBtn.addEventListener('click', () => {
    introDiv.style.display = 'none';
    formDiv.style.display = 'flex';
});
hideFormBtn.addEventListener('click', () => {
    introDiv.style.display = 'flex';
    formDiv.style.display = 'none';
});
// OBJECT WITH ARRAYS OF OBJECTS
let streakObject = new classStreak();
//get form, form data, create the
// get form
let form = document.querySelector('form');
let submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let taskInput = document.getElementById('taskName');
    let taskInputValue = taskInput.value;
    let imageURL = document.getElementById('image');
    let imageURLValue = imageURL.value;
    let dateInput = document.getElementById('date');
    let dateInputValue = dateInput.value;
    console.log(taskInputValue, imageURLValue, dateInputValue);
    // object to hold the input values
    let taskObject = new taskClass(taskInputValue, imageURLValue, new Date(dateInputValue));
    streakObject.taskArray.push(taskObject);
    // console.log(taskObject);
    // called functions /shared event-listener
    taskDisplay();
});
// display task to html
function taskDisplay() {
    taskDisplayDiv.innerHTML = '';
    streakObject.taskArray.map(task => {
        let divTaskDisplay = `  <div class="taskDisplayCard">
        <img src="${task.imageURL}" alt="">
        <p>${task.date}"</p>
        <p>${task.task}"</p>

    </div>`;
        taskDisplayDiv.innerHTML += divTaskDisplay;
    });
}
