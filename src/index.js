import './style.css';
import { openForm } from './taskForm';

const newTaskButton = document.querySelector('.new-task');

newTaskButton.addEventListener('click', () => {
    openForm();
});