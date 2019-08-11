//DEfine UI variables
const form = document.querySelector('#task-form');

const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

//load all event listeners

function loadEventListeners() {

    //DOM Load events
    document.addEventListener('DOMContentLoaded', getTasks);
    //add tasks event
    form.addEventListener('submit', addTasks);
    //remove task events
    taskList.addEventListener('click', removeTasks);
    //clear task events
    clearBtn.addEventListener('click', clearTasks);
    //filter task events
    filter.addEventListener('keyup', filterTasks);
}

//get tasks from LS
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        //create li elements
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        //Create text node and append to li
        li.appendChild(document.createTextNode(task));

        //Create a new link element

        const link = document.createElement('a');
        //add class to the link-item
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //append link to the li
        li.appendChild(link);

        //Append li to the ul

        taskList.appendChild(li);
    })
}


//Add tasks

function addTasks(e) {

    if (taskInput.value === '') {
        alert('add tasks');
    }

    //create li elements
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create a new link element

    const link = document.createElement('a');
    //add class to the link-item
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append link to the li
    li.appendChild(link);

    //Append li to the ul

    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';

    // console.log(li);


    e.preventDefault();
}

//store task

function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove tasks
function removeTasks(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            //Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }


    // e.preventDefault();
}

//Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//Clear Tasks
function clearTasks(e) {
    // taskList.innerHTML = '';

    //faster process
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage() {
    localStorage.clear();
}
//filter tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })

    // console.log(text);
}