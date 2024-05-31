const content = document.querySelector('.content');

// Appends popup form for entering task details
function newTaskForm() {
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

    const addTask = document.createElement('button');
    addTask.textContent = 'Add Task +';
    addTask.classList.add('add-task-button');
    
    form.appendChild(closeButton);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(formBottom)
    formBottom.appendChild(dateInput);
    formBottom.appendChild(starredInput);
    formBottom.appendChild(addTask);
}

export { newTaskForm }