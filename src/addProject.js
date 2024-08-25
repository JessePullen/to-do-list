import { selectList } from "./viewTasks";

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

    // Add project to list and display if input not empty
    addProject.addEventListener('click', () => {
        if (projectInput.value !== '') {
            projectsList.push(projectInput.value);
            displayProjects();
    
            projectInput.remove();
            addProject.remove();
            cancel.remove();
            formIsOpen = false
        }
    });
}

let projectsList = ['test'];

function displayProjects() {
    clearDisplayedProjects();
    const sidebar = document.querySelector('.projects-menu');
    
    for (const project of projectsList) {
        const projectTitle = document.createElement('li');
        projectTitle.classList.add('project-title');
        sidebar.append(projectTitle);
        projectTitle.textContent = project;
    }
    selectList();
}

function clearDisplayedProjects() {
    const projectTitle = document.querySelectorAll('.project-title');
    for (const project of projectTitle) {
        project.remove();
    }
}

export { openProjectForm, displayProjects };