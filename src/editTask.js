import { openTaskForm } from "./taskForm";
import { saveTasks, taskList } from "./createTask";
import { displayTasks } from "./viewTasks";

// Removes selected task and displays current tasks
function removeTask(task) {
    let taskPosition = taskList.indexOf(task);

    taskList.splice(taskPosition, 1);

    saveTasks(taskList);
    displayTasks(taskList);
}

// Pre-fills task form with current tasks information to allow editing
function editTask(task) {
    let editing = true;
    openTaskForm(editing, task);

    const nameInput = document.querySelector('.name-input');
    const descriptionInput = document.querySelector('.description-input');
    const dateInput = document.querySelector('.date-input');
    const importantInput = document.querySelector('.important-input');

    nameInput.value = task.name;
    descriptionInput.value = task.description;
    dateInput.value = task.date;
    importantInput.checked = task.important;
}

// Replaces task info with new task form allowing editing of tasks
function saveEdit(task) {
    const nameInput = document.querySelector('.name-input');
    const descriptionInput = document.querySelector('.description-input');
    const dateInput = document.querySelector('.date-input');
    const importantInput = document.querySelector('.important-input');

    task.name = nameInput.value;
    task.description = descriptionInput.value;
    task.date = dateInput.value;
    task.important = importantInput.checked;

    saveTasks(taskList);
    displayTasks(taskList);
}

export { removeTask, editTask, saveEdit };