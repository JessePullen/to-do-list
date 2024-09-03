import { todaysDate, datesThisWeek } from "./dates";
import { taskList } from "./createTask";

// Displays tasks for selected list or project e.g. important tasks
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
    return taskList.date === todaysDate();
}

// Checks if date is within range of a week
function sortThisWeek(taskList) {
    const dates = datesThisWeek();

    for (const date of dates) {
        if (taskList.date === date) {
            return taskList.date === date;
        }
    }
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