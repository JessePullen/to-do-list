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
    {name:'name', description:'description', date:'2024-12-01', important:true, project:'test'},
    {name:'name2', description:'description2', date:'2023-12-01', important:false, project:''}
];

export { addTask, taskList };