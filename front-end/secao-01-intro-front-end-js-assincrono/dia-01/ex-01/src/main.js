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
  // console.log(optionSelected.value);
  let result = '';

  if (input === 'email') {
    result = validator.isEmail(inputValue.value);
  }
  if (input === 'cpf') {
    result = validator.isTaxID(inputValue.value, 'pt-BR');
  }
  if (input === 'cartao') {
    result = validator.isCreditCard(inputValue.value);
  }
  if (input === 'placa') {
    result = validator.isLicensePlate(inputValue.value, 'pt-BR');
  }
  if (input === 'senha') {
    result = validator.isStrongPassword(inputValue.value, { minLength: 8 });
  }
  displayResult.innerHTML = `A validação retornou ${result}`;
};
validateBtn.addEventListener('click', checkValidation);
