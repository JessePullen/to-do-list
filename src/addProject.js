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
        formIsOpen = false;
    });

    // Add project to list and display if input not empty
    addProject.addEventListener('click', () => {
        if (projectInput.value !== '') {
            projectList.push(projectInput.value);
            displayProjects();
            saveProjects();
    
            projectInput.remove();
            addProject.remove();
            cancel.remove();
            formIsOpen = false;
        }
    });
}

let projectList = ['To Do List'];

// Gets projects from projectList and displays clickable li items to go to project
function displayProjects() {
    clearDisplayedProjects();
    const sidebar = document.querySelector('.projects-menu');
    
    for (const project of projectList) {
        const projectTitle = document.createElement('li');
        projectTitle.classList.add('project-title');
        sidebar.appendChild(projectTitle);
        projectTitle.textContent = project;

        const removeButton = document.createElement('img');
        removeButton.src = '/src/assets/delete.svg';
        removeButton.classList.add('project-remove-button');
        projectTitle.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            removeProject(projectTitle.textContent);
        });
    }
    selectList();
}

// Resets displayed projects in case of deletion of displayed project
function clearDisplayedProjects() {
    const projectTitle = document.querySelectorAll('.project-title');
    for (const project of projectTitle) {
        project.remove();
    }
}

function saveProjects() {
    const projects = JSON.stringify(projectList);

    localStorage.setItem(
        'projectList',
        projects
    )
}

function getSavedProjects() {
    const getProjectList = localStorage.getItem('projectList');

    const projectParsed = JSON.parse(getProjectList);
    
    if (projectParsed === null) {
        projectList = [];
    } else {
        projectList = projectParsed;
    }
}

function removeProject(project) {
    const index = projectList.indexOf(project);
    projectList.splice(index, 1);
    
    saveProjects();
    displayProjects();
}

export { openProjectForm, displayProjects, saveProjects, getSavedProjects };