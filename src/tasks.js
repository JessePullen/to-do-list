// Stores task information in an object
function addTask(name, description, date, starred) {
    return {
        name,
        description,
        date,
        starred
    }
}

let taskList = [
    {name:'name',description:'description', date:'01/12/0123', starred:'on'},
    {name:'name2',description:'description2', date:'01/12/0123', starred:'on'}
];

export { addTask, taskList };