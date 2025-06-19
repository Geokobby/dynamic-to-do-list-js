document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please add a task');
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.classList.add = 'remove-btn'

        button.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(button);
        taskList.appendChild(li);
        taskInput.value = "";
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    addTask();
});


    let tasks = [];
  
   
    function loadTasks() {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
          createTaskElement(task);
        });
      }
    }
  
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    
    function createTaskElement(taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
  
      const button = document.createElement("button");
      button.textContent = "Remove";
      button.className = "remove-btn";
  
      button.onclick = function () {
       
        tasks = tasks.filter(task => task !== taskText);
        
        saveTasks();
        
        taskList.removeChild(li);
      };
  
      li.appendChild(button);
      taskList.appendChild(li);
    }
  
 
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please add a task");
        return;
      }
  
      
      tasks.push(taskText);
      saveTasks();
  
     
      createTaskElement(taskText);
      taskInput.value = "";
    }
  
    
    addButton.addEventListener("click", addTask);
  
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    
    loadTasks();
  
  
