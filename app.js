const ToDoInput = document.querySelector(".ToDo-input");
const ToDoButton = document.querySelector(".ToDo-button");
const ToDoList = document.querySelector(".ToDo-List");
const Filter = document.querySelector(".filterToDos");


ToDoButton.addEventListener('click', addToDo);
ToDoList.addEventListener('click', DeleteCheck);
Filter.addEventListener('click', filterToDo);

function addToDo(Event) {
    event.preventDefault();

    const ToDoDiv = document.createElement("div");
    ToDoDiv.classList.add("ToDo");

    const newToDo = document.createElement("li");
    newToDo.innerText = ToDoInput.value;
    newToDo.classList.add("ToDo-item");
    ToDoDiv.appendChild(newToDo);

    const DoneButton = document.createElement("button");
    DoneButton.innerHTML = '<i class="fas fa-check-square"></i>';
    DoneButton.classList.add("DoneBtn");
    ToDoDiv.appendChild(DoneButton);

    const DeleteButton = document.createElement("button");
    DeleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    DeleteButton.classList.add("DeleteBtn");
    ToDoDiv.appendChild(DeleteButton);

    ToDoList.appendChild(ToDoDiv);
    ToDoInput.value = " ";
}

function DeleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "DeleteBtn"){
        const ToDo = item.parentElement;
        ToDo.remove();
    }
    if (item.classList[0] === "DoneBtn"){
        const ToDo = item.parentElement;
        ToDo.classList.toggle("Completed");
    }
}

function filterToDo(e) {
    const todos = ToDoList.childNodes;
    todos.forEach(function(ToDo) {
        switch (e.target.value) {
            case "all":
                ToDo.style.display = "flex";
                break;
            case "completed":
                if(ToDo.classList.contains("Completed")) {
                    ToDo.style.display = "flex";
                } else {
                    ToDo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!ToDo.classList.contains("Completed")) {
                    ToDo.style.display = "flex";
                } else {
                    ToDo.style.display = "none";
                }
        }
    });
}