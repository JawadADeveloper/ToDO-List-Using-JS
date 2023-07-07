const inputbox = document.getElementById("input-box");
const todoList = document.getElementById("todolist");

function FunctionofAdd() {
    const task = inputbox.value.trim();
    if (task === '') {
        alert("You must add a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt delete-icon";
    deleteIcon.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteIcon);

    todoList.appendChild(li);

    inputbox.value = "";
}
