//Selektors

const todoInput = document.getElementById("todo-input");

const addBtn = document.getElementById("todo-button");

const todoUl = document.getElementById("todo-ul");

let todos = JSON.parse(localStorage.getItem("TODOS") || [])
console.log(todos);

const renderSavedTodos = () => {
    todos.forEach((todo) => {
        cretaListElement(todo)
    })
}
renderSavedTodos();


//Button click oldugunda ne olsun?

addBtn.addEventListener("click" , () =>{
    if(todoInput.value.trim () === "" ){ //inputun icunde deger girilmediyse alert var
        alert("Please enter new todo")

    }else{
        const newTodo = {
            id: new Date().getTime(),
            compledet:false,
            text:todoInput.value,
        };
        //yeni bir elementi olusturup Dom abas
        cretaListElement(newTodo);

        todos,push(newTodo);
    }
})