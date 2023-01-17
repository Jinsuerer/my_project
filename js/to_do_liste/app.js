//? Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};


renderSavedTodos();



addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Please enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));
    todoInput.value = "";
  }
});




function createListElement(newTodo) {
  const { id, completed, text } = newTodo; // destr.
  const li = document.createElement("li"); // li olusturduk

  li.setAttribute("id", id); // li elementine id olusturduk

  completed && li.classList.add("checked"); // completed true oldugu zaman checked'i    li'ye ekle
  
  const okIcon = document.createElement("i"); // i olusturduk
  okIcon.setAttribute("class", "fas fa-check"); // i elementine class verdik
  li.appendChild(okIcon); // i elementini li elementine child yaptik
  
  const p = document.createElement("p"); // p olusturduk
  const pTextNode = document.createTextNode(text); //inputun icindeki veriyi "pTextNode" degiskenine atadik
  
  p.appendChild(pTextNode); // pTextNode degiskenini p ye child yaptik
  li.appendChild(p);
  
  const deleteIcon = document.createElement("i"); // i elementi olusturuldu
  deleteIcon.setAttribute("class", "fas fa-trash"); // i elementine class verdik
  li.appendChild(deleteIcon); // i elementini li elementine child yaptik
  todoUl.appendChild(li); // li elementi ul nin icine konumlandirilacak
}



todoUl.addEventListener("click", (e) => {
  const id = e.target.parentElement.getAttribute("id");
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    todos = todos.filter((todo) => todo.id !== Number(id));
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].completed = !todos[index].completed;
      }
    });
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
});




todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});




window.onload = function () {
  todoInput.focus();
};
