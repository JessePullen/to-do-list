import { taskList } from './tasks'

// Allows task lists to be selected
function selectList() {
    const list = document.querySelectorAll('li');
    
    for (const item of list) {
        item.addEventListener('click', () => {
            for (const item of list) {
                item.classList.remove('active');
            }
            item.classList.add('active');
        });
    }
}

// Displays task information in the content section
function displayTasks() {
    for (const list of taskList) {
        const content = document.querySelector('.content');
    
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
    
        const name = document.createElement('p');
        name.textContent = list.name;
    
        const description = document.createElement('p');
        description.classList.add('card-description');
        description.textContent = list.description;
    
        const date = document.createElement('p');
        date.textContent = list.date;
    
        const starred = document.createElement('p');
        starred.textContent = list.starred
    
        const edit = document.createElement('button');
        edit.textContent = 'edit';
    
        const remove = document.createElement('button');
        remove.textContent = 'remove';
    
        content.appendChild(taskCard)
        taskCard.appendChild(name);
        taskCard.appendChild(description);
        taskCard.appendChild(date);
        taskCard.appendChild(starred);
        taskCard.appendChild(edit);
        taskCard.appendChild(remove);
    }
}

export { selectList, displayTasks };