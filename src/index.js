import './style.css';
import { openTaskForm } from './taskForm';
import { openProjectForm } from './addProject';

const newTaskButton = document.querySelector('.new-task');
const newProjectButton = document.querySelector('.new-project');

newTaskButton.addEventListener('click', () => {
    openTaskForm();
});

newProjectButton.addEventListener('click', () => {
    openProjectForm();
});