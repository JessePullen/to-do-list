let formIsOpen = false;

function openProjectForm() {
    if (formIsOpen === false) {
        projectForm();
        formIsOpen = true;
    }
}

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
}

function addProject() {

}

export { openProjectForm };