import './style.css';
import { openTaskForm } from './taskForm';
import { openProjectForm } from './addProject';
import { selectList } from './taskLists';

const newTaskButton = document.querySelector('.new-task');
const newProjectButton = document.querySelector('.new-project');

newTaskButton.addEventListener('click', () => {
    openTaskForm();
});

newProjectButton.addEventListener('click', () => {
    openProjectForm();
});

(function run() {
    selectList();
})();