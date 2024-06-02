import './style.css';
import { openForm } from './taskForm';
import { addProject } from './addProject';

const newTaskButton = document.querySelector('.new-task');
const newProjectButton = document.querySelector('.new-project');

newTaskButton.addEventListener('click', () => {
    openForm();
});

newProjectButton.addEventListener('click', () => {
    addProject();
});