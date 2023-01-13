import validator from 'validator';
import './style.css';

const inputValue = document.querySelector('#input-string');
const optionSelected = document.querySelector('#input-tipo-de-dado');
const validateBtn = document.querySelector('#validate-btn');
const displayResult = document.querySelector('#display-result');

const checkInputSelected = () => {
  const inputSelected = optionSelected.value;
  return inputSelected;
};

const checkValidation = () => {
  const input = checkInputSelected();
  console.log(optionSelected.value);

  if (input === 'email') {
    const result = validator.isEmail(inputValue.value);
    displayResult.innerHTML = `A validação retornou ${result}`;
  }
  if (input === 'cpf') {
    const result = validator.isTaxID(inputValue.value, 'pt-BR');
    displayResult.innerHTML = `A validação retornou ${result}`;
  }
};
validateBtn.addEventListener('click', checkValidation);
