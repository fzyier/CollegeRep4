// ----- Завдання Timeout -----
let timeoutId;
const startTimeoutBtn = document.getElementById('startTimeout');
const cancelTimeoutBtn = document.getElementById('cancelTimeout');
const timeoutMessage = document.getElementById('timeoutMessage');

startTimeoutBtn.addEventListener('click', () => {
  timeoutMessage.textContent = "Таймер запущено, чекаємо 5 секунд...";
  timeoutId = setTimeout(() => {
    timeoutMessage.textContent = "Час вийшов!";
    console.log("Час вийшов!");
  }, 5000);
});

cancelTimeoutBtn.addEventListener('click', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutMessage.textContent = "Таймер скасовано.";
    console.log("Таймер скасовано.");
    timeoutId = null;
  }
});

// ----- Завдання Interval -----
let counterValue = 0;
const counterSpan = document.getElementById('counter');
const stopCounterBtn = document.getElementById('stopCounter');

const intervalId = setInterval(() => {
  counterValue++;
  counterSpan.textContent = counterValue;
}, 1000);

stopCounterBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  console.log("Лічильник зупинено.");
});

// ----- Завдання Fetch -----
const fetchDataBtn = document.getElementById('fetchData');
const fetchResult = document.getElementById('fetchResult');

fetchDataBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Отримані дані:", data);
      fetchResult.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error("Сталася помилка при отриманні даних:", error);
      fetchResult.textContent = "Помилка отримання даних.";
    });
});
