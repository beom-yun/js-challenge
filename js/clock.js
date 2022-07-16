const clock = document.querySelector('h3#clock');

const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getClock() {
  const date = new Date();

  const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate()
  ).padStart(2, '0')} ${dayOfTheWeek[date.getDay()]}`;
  const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(
    date.getSeconds()
  ).padStart(2, '0')}`;

  clock.innerText = `${today} ${time}`;
}

getClock();
setInterval(getClock, 1000);
