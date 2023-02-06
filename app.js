const todoInput = document.querySelector(`#addTodoInput`)
const addBtn = document.querySelector(`#addBtn`)
const todoContainer = document.querySelector(`.todoList`)

addBtn.addEventListener("click", ()=>{
    const todoText = todoInput.value
    if(todoText.trim() == ""){
        alert("Lütfen todo girin")
    }else if(todoText.trim().length < 4) {
        alert("Minimum 5 karakter giriniz")
    }else{
        addTodo(todoText)
    }
    
})


function addTodo(todoText){
    const el = document.createElement("div")
    el.classList.add("singleTodo")
    el.innerHTML = `
    <span>${todoText}</span>
    <i class="fa-solid fa-check"></i>
    `
    todoContainer.appendChild(el)
}