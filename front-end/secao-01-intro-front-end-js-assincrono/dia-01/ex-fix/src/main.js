import { nanoid } from 'nanoid';
import "./style.css";
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('#btn-generate-password');
const displayPasswordEl = document.querySelector('h2');
const copyToClipboard = document.querySelector('#btn-copy-to-clipboard');

passwordBtnEl.addEventListener('click', () => {
  const randowPassword = nanoid();
  displayPasswordEl.innerHTML = randowPassword;
});

// copyToClipboard.addEventListener('click', () => {
//   copy(displayPasswordEl.innerHTML);
//   alert('senha copiada com sucesso')
// })

displayPasswordEl.addEventListener('click', () => {
  copy(event.target.innerHTML);
  alert('Senha copiada');
});