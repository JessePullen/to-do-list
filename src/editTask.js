import { taskList } from "./tasks";
import { displayTasks } from "./viewTasks";

// Removes selected task and displays current tasks
function removeTask(task) {
    let taskPosition = taskList.indexOf(task);

    taskList.splice(taskPosition, 1);

    displayTasks(taskList);
}


export { removeTask };