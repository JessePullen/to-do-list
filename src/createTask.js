import { displayTasks } from './viewTasks';
import { sortTasks } from './sortTasks';

let taskList = [
    {completed: false, name:'Study', description:'', date:'2024-12-01', important:true, project:''},
    {completed: true,  name:'Create app', description:'To Do List app', date:'2024-09-03', important:false, project:'To Do List'}
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
    let completed = false;
    return {
        completed,
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

function completeTask(checked, task) {
    if (checked === true) {
        task.completed = true;
    } else {
        task.completed = false;
    }
    saveTasks();
}

export { taskList, addTask, createTask, saveTasks, getSavedTasks, completeTask };