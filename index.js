const tasks = [
    'Add Task','Delete Task',
  ]
  
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
  
       // Delete action
       const delAction = () => {
          listSection.remove();
       }
  
  
       // Done action
       const doneAction = () => {
          listSectionChild.style.textDecoration = 'line-through' 
          listSectionChild.style.textDecorationColor = 'green' 
       }
  
       const EditAction = () => {
          listSectionChild.style.textDecoration = 'none'
       }
  
      //  // calling the delete action with eventHandler
       deleteButton.addEventListener('click',delAction);
  
       //  // calling the delete action with eventHandler
        doneButton.addEventListener('click',doneAction);
  
       //  // calling the delete action with eventHandler
       EditButton.addEventListener('click',EditAction);
  
       
      
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
          let textInput;
          const inputRet = () => {
          textInput = document.querySelector("#addItemInput").value;
          // console.log(textInput)
          if (textInput.length !== 0) {
          tasks.unshift(textInput)
           }
           displayTasks(tasks);
          }
  
          addButton.addEventListener('click',inputRet);
  
  