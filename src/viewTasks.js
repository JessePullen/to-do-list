import { sortTasks } from './sortTasks';
import { removeTask, editTask } from './editTask';
import { formatInputDate } from './dates';
import { completeTask } from './createTask';

// Allows task lists to be selected
function selectList() {
    const list = document.querySelectorAll('li');

    // Adds class to selected element and remove from others
    for (const item of list) {
        item.addEventListener('click', () => {
            for (const item of list) {
                item.classList.remove('active');
            }
            item.classList.add('active');
            // Sorts list with parameters by name of selected element
            displayTasks(sortTasks(item.textContent));
        });
    }
}

// Displays task information in the content section
function displayTasks(sortedList) {
    clearDisplayedTasks();

    const content = document.querySelector('.content');

    for (const task of sortedList) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');

        const completeButton = document.createElement('input');
        completeButton.setAttribute('type', 'checkbox');
        completeButton.classList.add('complete-button');
        completeButton.checked = task.completed;

        completeButton.addEventListener('click', () => {
            completeTask(completeButton.checked, task);
        });

        const name = document.createElement('p');
        name.textContent = task.name;

        const description = document.createElement('p');
        description.classList.add('card-description');
        description.textContent = task.description;

        const date = document.createElement('p');
        date.textContent = formatInputDate(task.date);

        const important = document.createElement('img');
        important.classList.add('important')
        if (task.important === true) {
            important.src = '/src/assets/exclamation.svg';
        } else {
            important.src = '/src/assets/exclamation-off.svg';
        }

        const edit = document.createElement('img');
        edit.src = '/src/assets/edit-note.svg';
        edit.classList.add('edit-button');

        edit.addEventListener('click', () => {
            editTask(task);
        });

        const remove = document.createElement('img');
        remove.src = '/src/assets/delete.svg';
        remove.classList.add('remove-button');

        remove.addEventListener('click', () => {
            removeTask(task);
        });

        content.appendChild(taskCard)
        taskCard.appendChild(completeButton);
        taskCard.appendChild(name);
        taskCard.appendChild(description);
        taskCard.appendChild(date);
        taskCard.appendChild(important);
        taskCard.appendChild(edit);
        taskCard.appendChild(remove);
    }
}

// Removes task cards from content section to prevent duplicates
function clearDisplayedTasks() {
    const taskCard = document.querySelectorAll('.task-card');
    for (const task of taskCard) {
        task.remove();
    }
}

export { selectList, displayTasks };