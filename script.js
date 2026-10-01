


let submit = document.querySelector(".add_button");
let container = document.querySelector(".taskContainer");

function createTask(taskText) {
    //adding a task
    let newTask = document.createElement("label");

    newTask.className = "addingtask";

    newTask.innerHTML = `
        <input class="checkbox" type="checkbox">

        <div class="addtaskborder">
            <input class="addtask" type="text" placeholder=" Enter Your Task">
        </div>

        <div class="del">
            <button class="delete" type="submit">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    container.appendChild(newTask);

    let input = newTask.querySelector(".addtask");

    input.value = taskText;
    //saving task

    input.addEventListener("input", function () {
        let allTasks = document.querySelectorAll(".addtask");

        let tasks = [];

        allTasks.forEach(function (task) {
            tasks.push(task.value);
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    //deleting task

    let del = newTask.querySelector(".delete");

    del.addEventListener("click", function () {
        newTask.remove();
        //saving the remainnng task lefft after deletion 

        let allTasks = document.querySelectorAll(".addtask");

        let tasks = [];

        allTasks.forEach(function (task) {
            tasks.push(task.value);
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}
//creating enew task weith value '' +as when user clicks on add+ there we want to create a new empty input for them

submit.addEventListener("click", function () {
    createTask("");
});

//loading 
let savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    let tasks = JSON.parse(savedTasks);

    tasks.forEach(function (task) {
        createTask(task);
    });
}