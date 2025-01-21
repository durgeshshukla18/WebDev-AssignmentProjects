const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

//new task
function addTask() {
  const taskText = todoInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  //task text
  const task = document.createElement("span");
  task.className = "task";
  task.textContent = taskText;

  //complete button
  const completeButton = document.createElement("button");
  completeButton.className = "complete-button";
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    listItem.classList.toggle("completed");
  };

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    todoList.removeChild(listItem);
  };

  listItem.appendChild(task);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  todoInput.value = "";
}

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
