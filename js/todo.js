const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');

const todoList = localStorage.getItem('todoList');
if (!todoList) todoList = [];

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

  todoList.push(newTodo);
  saveTodoList();
}

todoForm.addEventListener('submit', submitTodo);
