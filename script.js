
let submit = document.querySelector(".submit");
let container = document.querySelector(".taskContainer");

submit.addEventListener("click", function () {

    let newTask = document.createElement("label");

    newTask.className = "addingtask";

    newTask.innerHTML = `
        <input class="checkbox" type="checkbox">
        <input class="addtask" type="text" placeholder=" Enter Your Task Here">
    `;

    container.appendChild(newTask);
});