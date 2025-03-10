function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this)">X</button>`;

    document.getElementById("taskList").appendChild(listItem);
    input.value = "";
}

function removeTask(button) {
    let listItem = button.parentElement;
    document.getElementById("taskList").removeChild(listItem);
}
