let tasks = 0;
let Todos = [];
let Deleted = [];
let Finished = [];

function newTask(){
  
  let TaskkContainer = document.getElementById("tasks");
  let input = document.getElementById("task");
  let addTask = document.createElement("div");
  
  addTask.classList.add("task");
  addTask.setAttribute("id", `Task${tasks}`);
  addTask.innerHTML = `<div class="todo-task" onclick="finishTask('Task${tasks}')">${input.value}</div> <button onclick='deleteTask("Task${tasks}")'>Sil</button>
<button onclick="finishTask('Task${tasks}')">Bitir</button>`;
  TaskkContainer.appendChild(addTask);
  
  Todos.push({
  task: input.value,
  id: tasks
  });
  
  input.value = '';

  tasks++
}

function deleteTask(id){
  let task = document.getElementById(id);
  task.style.display = "none";
  
  Deleted.push({
  HTML:task.innerHTML
  });
}

function finishTask(id){
 let task = document.getElementById(id);
  task.style.display = "none";
  
  Finished.push({
  HTML:task.innerHTML
  });
}
