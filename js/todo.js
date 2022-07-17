const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoUl = document.querySelector('#todo-list');

tmp = localStorage.getItem('todoList');
let todoList = tmp ? JSON.parse(localStorage.getItem('todoList')) : [];
todoList.forEach(paintTodo);

function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function submitTodo(event) {
  event.preventDefault();

  const newTodo = {
    id: Date.now(),
    todo: todoInput.value,
  };
  todoInput.value = '';

  paintTodo(newTodo);
  todoList.push(newTodo);
  saveTodoList();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const span = document.createElement('span');
  span.innerText = newTodo.todo;

  const button = document.createElement('button');
  button.innerText = 'completed';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoUl.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoList = todoList.filter((todo) => todo.id !== parseInt(li.id));
  saveTodoList();
}

todoForm.addEventListener('submit', submitTodo);
