const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const welcome = document.querySelector('#welcome');
const user = localStorage.getItem('user');

function login(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');

  const user = loginInput.value;
  localStorage.setItem('user', user);
  paintUser(user);
}

function paintUser(user) {
  welcome.innerText = `Hello, ${user}!`;
  welcome.classList.remove('hidden');
}

if (!user) {
  welcome.innerText = 'Welcome!';
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', login);
} else {
  paintUser(user);
}
