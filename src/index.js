import './style.css';
import { openTaskForm } from './taskForm';
import { openProjectForm, displayProjects, getSavedProjects, saveProjects } from './addProject';
import { selectList, displayTasks } from './viewTasks';
import { taskList, saveTasks, getSavedTasks } from './createTask';

const newTaskButton = document.querySelector('.new-task');
const newProjectButton = document.querySelector('.new-project');

newTaskButton.addEventListener('click', () => {
    openTaskForm();
});

newProjectButton.addEventListener('click', () => {
    openProjectForm();
});

(function run() {
    getSavedTasks();
    getSavedProjects();
    saveTasks();
    saveProjects();
    selectList();
    displayTasks(taskList);
    displayProjects();
})();