import { createTask } from './createTask'
import { saveEdit } from './editTask';

let formIsOpen = false;

// Checks if form is open to prevent multiple instances
function openTaskForm(editing, task) {
    if (formIsOpen === false) {
        newTaskForm(editing, task);
        formIsOpen = true;
    }
}

// Appends popup form for entering task details
function newTaskForm(editing, task) {
    const content = document.querySelector('.content');

    const form = document.createElement('form');
    form.classList.add('form');
    content.appendChild(form);

    const formBottom = document.createElement('div');
    formBottom.classList.add('form-bottom');

    const closeButton = document.createElement('img');
    closeButton.src = '/src/assets/close.svg';
    closeButton.classList.add('close-button');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.classList.add('name-input');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('description-input');

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.classList.add('date-input');

    const importantLabel = document.createElement('label');
    importantLabel.textContent = 'Important';    
    const importantInput = document.createElement('input');
    importantInput.setAttribute('type', 'checkbox');
    importantInput.classList.add('important-input');

    // Adds label and checkbox into div at bottom of form
    const importantDiv = document.createElement('div');
    importantDiv.classList.add('important-div')
    importantDiv.appendChild(importantLabel);
    importantDiv.appendChild(importantInput);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task +';
    addTaskButton.classList.add('add-task-button');

    const saveEditButton = document.createElement('button');
    saveEditButton.textContent = 'Save';
    saveEditButton.classList.add('save-edit-button');

    form.appendChild(closeButton);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(formBottom)
    formBottom.appendChild(dateInput);
    formBottom.appendChild(importantDiv);

    // Replaces add task button with save edit button
    if (editing === true) {
        formBottom.appendChild(saveEditButton);
    } else {
        formBottom.appendChild(addTaskButton);
    }

    addTaskButton.addEventListener('click', () => {
        createTask(nameInput, descriptionInput, dateInput, importantInput);

        form.remove();
        formIsOpen = false
    });

    closeButton.addEventListener('click', () => {
        form.remove();
        formIsOpen = false
    });

    saveEditButton.addEventListener('click', () => {
        saveEdit(task);

        form.remove();
        formIsOpen = false
    });
}

export { openTaskForm }