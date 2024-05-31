import './style.css';
import { newTaskForm } from './taskForm';

const newTaskButton = document.querySelector('.new-task');

newTaskButton.addEventListener('click', () => {
    newTaskForm();
});