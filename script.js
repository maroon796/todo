'use strict';

const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const task = document.querySelectorAll('.task');

task.forEach((task) => {
  console.log(task);
});

button.addEventListener('click', function () {
  const text = input.value;
  console.log(text);
  input.value = '';
  task.textContent = text;
});
