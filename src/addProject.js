import { selectList } from "./tasks";

let formIsOpen = false;

// Checks if form is open to prevent multiple instances
function openProjectForm() {
    if (formIsOpen === false) {
        projectForm();
        formIsOpen = true;
    }
}

// Appends input for adding projects
function projectForm() {
    const sidebar = document.querySelector('.projects');
    
    const form = document.createElement('div');
    form.classList.add('project-form');
    sidebar.appendChild(form);

    const projectInput = document.createElement('input');
    projectInput.classList.add('project-input');

    const addProject = document.createElement('button');
    addProject.textContent = 'Add Project';
    addProject.classList.add('add-project-button');

    const cancel = document.createElement('button');
    cancel.textContent = 'Cancel';
    cancel.classList.add('cancel-button');

    form.appendChild(projectInput);
    form.appendChild(addProject);
    form.appendChild(cancel);

    cancel.addEventListener('click', () => {
        projectInput.remove();
        addProject.remove();
        cancel.remove();
        formIsOpen = false
    });

    addProject.addEventListener('click', () => {
        addToProjects(projectInput.value);
        projectInput.remove();
        addProject.remove();
        cancel.remove();
        formIsOpen = false
    });
}

function addToProjects(projectName) {
    const sidebar = document.querySelector('.projects-menu');
    const project = document.createElement('li');
    project.textContent = projectName;
    sidebar.append(project);
    selectList();
}

export { openProjectForm };