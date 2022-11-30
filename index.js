const tasks = [
    {
     id: 1,
     description: "Finish group project",
    },
    {
    id: 2,
    description: "Buy christmas gifts",
    },
    {
    id: 3,
    description: "Get the kids from Kindergarten",
    },
];


const listSectionFunction = (task) => {
    const listSection = document.createElement("div")
    listSection.classList.add("task")

    const listSectionChild = document.createElement("div")
    listSectionChild.classList.add("taskitem")

    listSectionChild.innerText = task.description;

    const buttonGroup = document.createElement("div")
    buttonGroup.classList.add("buttons")

    const editButton = document.createElement('button')
    editButton.classList.add("btn-outline-warning", "btn", "buttons")
    editButton.innerText = 'Edit'

    const deleteButton = document.createElement('button')
    deleteButton.classList.add("btn-outline-danger", "btn", "buttons")
    deleteButton.innerText = 'Delete'

    const doneButton = document.createElement('button')
    doneButton.classList.add("btn-outline-success", "btn", "buttons")
    doneButton.innerText = 'Done'

    deleteButton.addEventListener('click', (e) => {
        listSection.remove();
    });

    doneButton.addEventListener('click', (e) => {
        listSectionChild.style.textDecoration = 'line-through'
    });

    listSection.append(listSectionChild)
    listSection.append(buttonGroup)
    buttonGroup.append(editButton)
    buttonGroup.append(deleteButton)
    buttonGroup.append(doneButton)



    return listSection;

    
};

const displayTaskList = (array) => {
    const listSectionA = document.querySelector('#list');
    array.forEach((task) => {
        const newTask = listSectionFunction(task);
        listSectionA.appendChild(newTask);
    });
};

displayTaskList(tasks);

// Delete a task



//add to-do-item - Candy

//edit to-do-item - Lukas

//mark a to-do-item as done - Sofia

//delete to-do-item - Sindhura