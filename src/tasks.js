// Stores task information in an object
function addTask(name, description, date, important) {
    return {
        name,
        description,
        date,
        important
    }
}

let taskList = [
    {name:'name',description:'description', date:'01/12/2024', important:true},
    {name:'name2',description:'description2', date:'01/12/2023', important:false}
];

export { addTask, taskList };