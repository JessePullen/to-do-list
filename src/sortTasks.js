import { taskList } from "./tasks";

function sortTasks(parameter) {
    if (parameter === 'All Tasks') {
        return taskList;
    } else if (parameter === 'Today') {
        return taskList.filter(sortToday);
    } else if (parameter === 'This Week') {
        return taskList.filter(sortThisWeek);
    } else if (parameter === 'Important') {
        return taskList.filter(sortImportant);
    } else {
        return taskList.filter(sortProject);
    }
}

function sortToday(taskList) {
    return taskList.date === '01/12/2024';
}

function sortThisWeek(taskList) {
    return taskList.date === '01/12/2023';
}

function sortImportant(taskList) {
    return taskList.important === true;
}

// Checks if task was assigned to a project
function sortProject(taskList) {
    const lists = ['All Tasks', 'Today', 'This Week', 'Important'];
    const currentProject = document.querySelector('.active').textContent;
    if (!lists.includes(taskList.project)) {
        return taskList.project === currentProject;
    }
}

export { sortTasks };