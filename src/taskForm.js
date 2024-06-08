import { addTask, taskList } from './tasks'
import { displayTasks } from './viewTasks';

let formIsOpen = false;

// Checks if form is open to prevent multiple instances
function openTaskForm() {
    if (formIsOpen === false) {
        newTaskForm();
        formIsOpen = true;
    }
}

// Appends popup form for entering task details
function newTaskForm() {
    const content = document.querySelector('.content');

    const form = document.createElement('form');
    form.classList.add('form');
    content.appendChild(form);

    const formBottom = document.createElement('div');
    formBottom.classList.add('form-bottom');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'x';
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

    const starredInput = document.createElement('input');
    starredInput.setAttribute('type', 'checkbox');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task +';
    addTaskButton.classList.add('add-task-button');
    
    form.appendChild(closeButton);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(formBottom)
    formBottom.appendChild(dateInput);
    formBottom.appendChild(starredInput);
    formBottom.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
        const task = addTask(nameInput.value, descriptionInput.value, dateInput.value, starredInput.value);
        taskList.push(task);
        displayTasks();
        form.remove();
        formIsOpen = false
    });

    closeButton.addEventListener('click', () => {
        form.remove();
        formIsOpen = false
    });
}

export { openTaskForm }