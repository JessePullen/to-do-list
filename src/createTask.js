import { displayTasks } from './viewTasks';
import { sortTasks } from './sortTasks';

let taskList = [
    {name:'name', description:'description', date:'2024-12-01', important:true, project:'test'},
    {name:'name2', description:'description2', date:'2023-12-01', important:false, project:''}
];

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

    // Keeps current display of sorted tabs
    displayTasks(sortTasks(currentList));
}

export { taskList, addTask, createTask };