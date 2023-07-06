const inputbox = document.getElementById("input-box");
const todoList = document.getElementById("todolist");

function FunctionofAdd() {
    const task = inputbox.value.trim();
    if (task === '') {
        alert("You must add a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const icon = document.createElement("i");
    icon.className = "fas fa-trash-alt";
    icon.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(icon);
    todoList.appendChild(li);

    inputbox.value = "";
}
