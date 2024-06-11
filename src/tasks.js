// Stores task information in an object
function addTask(name, description, date, important, project) {
    return {
        name,
        description,
        date,
        important,
        project
    }
}

let taskList = [
    {name:'name', description:'description', date:'01/12/2024', important:true, project:'test'},
    {name:'name2', description:'description2', date:'01/12/2023', important:false, project:''}
];

export { addTask, taskList };