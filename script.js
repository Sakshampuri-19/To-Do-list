
let submit = document.querySelector(".add_button");
let container = document.querySelector(".taskContainer");



submit.addEventListener("click", function (){
    let newTask = document.createElement("label");
    newTask.className = "addingtask";
    newTask.innerHTML=`
        <input class="checkbox" type="checkbox">
        <input class="addtask" type="text" placeholder=" Enter Your Task">
        <div class="del">
                <button class="delete" type="submit"><i class="fa-solid fa-trash"></i></button>
            </div>`;

        container.appendChild(newTask);  
        let del =newTask.querySelector(".delete");
        del.addEventListener("click",function(){
            newTask.remove()
        })
});
