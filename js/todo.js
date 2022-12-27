const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.dir(event);
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    li.appendChild(span);

    const toDoButton = document.createElement("button");
    toDoButton.innerText = "X";
    toDoButton.addEventListener("click", deleteToDo);
    li.appendChild(toDoButton);
    
    toDoList.appendChild(li);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", onTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}