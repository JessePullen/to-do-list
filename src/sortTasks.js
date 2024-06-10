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
        return taskList.filter(sortProject(parameter));
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

function sortProject(taskList) {
    return taskList.project === 'test'
}

export { sortTasks };