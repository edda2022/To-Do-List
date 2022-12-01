


  // const tasks = [
  //  'Finish group project','Buy christmas presents', 'Get a coffee'
  // ]

//Local Storage
const localStorageItems = localStorage.getItem("tasks");
const tasks = localStorageItems ? JSON.parse(localStorageItems) : [
  'Finish group project','Buy christmas presents', 'Get a coffee'
];
  
  const createTask = (task) => {
      // div with class task
      const listSection = document.createElement("div");
      listSection.classList.add("task");
  
      // div with class taskitem
      const listSectionChild = document.createElement("div");
      listSectionChild.classList.add("taskitem");

      listSectionChild.innerText = task;

  
      // div with class buttons
      const taskButtons = document.createElement("div");
      taskButtons.classList.add("buttons");
  
      // button with different classes for edit done and delete
      // delete button 
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("buttons", "btn", "btn-outline-danger")
      deleteButton.innerText = 'DELETE';
  
      // edit button 
      const EditButton = document.createElement("button");
      EditButton.classList.add("buttons", "btn", "btn-outline-warning")
      EditButton.innerText = 'EDIT';
  
       // Done button 
       const doneButton = document.createElement("button");
       doneButton.classList.add("buttons", "btn", "btn-outline-success")
       doneButton.innerText = 'DONE';

       //edit action
       const editAction = () => {
        if(EditButton.innerText === 'EDIT') {
          listSectionChild.setAttribute("contenteditable", "true");
          listSectionChild.style.border = 'solid';
          listSectionChild.style.borderRadius = '5px';
          listSectionChild.style.padding = '5px';
          EditButton.innerText = 'SAVE';
        } else {
          listSectionChild.setAttribute("contenteditable", "false");
          listSectionChild.style.border = 'none';
          EditButton.innerText = 'EDIT';
        }
        
       } 
  
       // Delete action
       const delAction = () => {
          alert('Deleting the Task!!')
          listSection.remove();
          localStorage.removeItem("tasks");
       }
  
  
       // Done action
       const doneAction = () => {
        if (doneButton.innerText === 'DONE'){
          listSectionChild.style.textDecoration = 'line-through' 
          listSectionChild.style.textDecorationThickness = '0.25rem'
          listSectionChild.style.textDecorationColor = 'hsl(317 100% 54%)' 
          doneButton.innerText='UNDONE';
        } else {
          listSectionChild.style.textDecoration = 'none' 
          doneButton.innerText='DONE';
        }
     }
  
      //  // calling the delete action with eventHandler
       deleteButton.addEventListener('click',delAction);
  
       //  // calling the done action with eventHandler
        doneButton.addEventListener('click',doneAction);
  
       //  // calling the edir action with eventHandler
       EditButton.addEventListener('click',editAction);
  
       
      
      //added taskitem div to task div
      listSection.append(listSectionChild);
      listSection.append(taskButtons);
      taskButtons.append(deleteButton);
      taskButtons.append(EditButton);
      taskButtons.append(doneButton);
  
      //returning the entire list section after all appends
      return listSection;
  }
  
  
  
  const displayTasks = (array) => {
      // adds the newly formed HTML code inside the LIST Section
      const tasksContainer = document.querySelector("#list");
      // clears the HTML page and loads the page fresh when called
      tasksContainer.innerHTML = "";
  
      array.forEach((task) => {
          
          const newTask = createTask(task);
  
          tasksContainer.appendChild(newTask);
         
      });
      
  };
  
  displayTasks(tasks);
  
const addButton = document.querySelector("#addInputButton")

const inputRet = () => {
    textInput = document.querySelector("#addItemInput").value;
    if (textInput.length !== 0) {
    tasks.unshift(textInput)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    displayTasks(tasks);
    document.querySelector("#addItemInput").value = "" //deletes the task after adding
    }

addButton.addEventListener('click',inputRet);

//OR add a task with enter-key
const inputField = document.querySelector("#addItemInput")
inputField.addEventListener('keydown',(e) => {
    if (e.key === 'Enter') {
        textInput = document.querySelector("#addItemInput").value;
    if (textInput.length !== 0) {
    tasks.unshift(textInput)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    displayTasks(tasks);
    document.querySelector("#addItemInput").value = "" //deletes the task after adding
    }
    }
);

