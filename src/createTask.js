import { displayTasks } from './viewTasks';
import { sortTasks } from './sortTasks';

let taskList = [
    {name:'name', description:'description', date:'2024-12-01', important:true, project:'test'},
    {name:'name2', description:'description2', date:'2023-12-01', important:false, project:''}
];

function saveTasks() {
    const tasks = JSON.stringify(taskList);
    
    localStorage.setItem(
        'taskList',
        tasks
    )
}

function getSavedTasks() {
    const getTaskList = localStorage.getItem('taskList');

    const taskParsed = JSON.parse(getTaskList);

    if (taskParsed === null) {
        taskList = [];
    } else {
        taskList = taskParsed;
    }
}

// Stores task information in an object
function addTask(name, description, date, important, project) {
    return {
        name,
        description,
        date,
        important,
        project
    }
}

function createTask(name, description, date, important) {
    const currentList = document.querySelector('.active').textContent;

    // // Creates a new task from form inputs
    const task = addTask(name.value, description.value, date.value, important.checked, currentList);

    taskList.push(task);

    saveTasks(taskList);

    // Keeps current display of sorted tabs
    displayTasks(sortTasks(currentList));
}

function completeTask(checked, taskCard) {
    if (checked === true) {
        taskCard.style.textDecoration = 'line-through';
        taskCard.style.textDecorationThickness = '1px';
    } else {
        taskCard.style.textDecoration = 'none';
    }
}

export { taskList, addTask, createTask, saveTasks, getSavedTasks, completeTask };