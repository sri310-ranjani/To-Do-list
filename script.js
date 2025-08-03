const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const tasksList = document.getElementById("tasks-list");
const totalTasks = document.getElementById("total-tasks");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
    };

    tasks.push(task);
    renderTasks();
    clearInput();
  }
});

function renderTasks() {
  tasksList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <div class="task-text">${task.text}</div>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;

    tasksList.appendChild(taskItem);
  });

  totalTasks.textContent = tasks.length;
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function clearInput() {
  taskInput.value = "";
}
