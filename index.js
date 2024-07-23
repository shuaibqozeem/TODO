let add = document.getElementById("addtask");
// let input = document.getElementById("taskInput");
let complete = document.getElementById("completedTasks");
let uncompleted = document.getElementById("uncompletedTasks");

add.addEventListener("click", function (e) {
  input = input.value;
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${taskInput.value}</span>
    <button onclick= "completeTasks(this)">done</button>
    <button onclick= "deleteTask(this)">Delete</button>
    `;
    //decide where to append the task based on completion status
    if (li.querySelector("span").classList.contains("completed")) {
      completedTasks.appendChild(li);
    } else {
      uncompletedTasks.appendChild(li);
    }
    taskInput.value = "";
  }
});

function completeTasks(button) {
  const taskSpan = button.previousElementSibling;
  taskSpan.classList.toggle("completed");
  //move the task to te appropiate action based on completed
  const taskLi = button.parentElement;
  const completedTasks = document.getElementById("completedTasks");
  const uncompletedTasks = document.getElementById("uncompletedTasks");
  if (taskSpan.classList.contains("completed")) {
    completedTasks.appendChild(taskLi);
  } else {
    uncompletedTasks.appendChild(taskLi);
  }
}
function deleteTask(button) {
  const taskLi = button.parentElement;
  taskLi.remove();
}
