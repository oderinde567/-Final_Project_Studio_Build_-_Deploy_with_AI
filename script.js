// Todo App functionality
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


// Load tasks from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];


function saveTodos(){
localStorage.setItem('todos', JSON.stringify(todos));
}


function renderTodos(){
list.innerHTML = '';
todos.forEach((todo, index) => {
const li = document.createElement('li');
li.textContent = todo;


const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => {
todos.splice(index, 1);
saveTodos();
renderTodos();
});


li.appendChild(deleteBtn);
list.appendChild(li);
});
}


form.addEventListener('submit', (e) => {
e.preventDefault();
const task = input.value.trim();
if(task){
todos.push(task);
input.value = '';
saveTodos();
renderTodos();
}
});


renderTodos();