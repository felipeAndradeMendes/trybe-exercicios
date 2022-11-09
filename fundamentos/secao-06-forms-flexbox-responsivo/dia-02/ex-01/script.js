const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const btnSubmit = document.querySelector('#btn-enviar');
const btnApagar = document.querySelector('#btn-apagar');
const checkBoxImages = document.querySelector('#permissoao-imagens');
const textArea = document.querySelector('#input-sobre-mim');

const isCheckboxChecked = () => {
  return checkBoxImages.checked;  
}

const checkNameLength = () => {
  return inputName.value.length >= 10 && inputName.value.length <= 40;
}

const checkEmailLength = () => {
  return inputEmail.value.length >=10 && inputEmail.value.length <= 50;
}

btnSubmit.addEventListener('click', (event) => {
  if (!checkNameLength() || !checkEmailLength()) {
    alert('Dados Inválidos');
    console.log('ERRO! Preencha todos os campos de acrodo com as regras');
  event.preventDefault();
  }

  if (!isCheckboxChecked()) {
    alert('Para participar da promoção, você precisa aceitar o uso das imagens para divulgação');
    console.log('ERRO! marque a opção de concordar com o uso das imagens');
    event.preventDefault();
  }
})

btnApagar.addEventListener('click', (event) => {
  const erase = confirm('Tem certeza que quer apagar tudo que foi preenchido?');

  if (!erase) {
    event.preventDefault();
  }
})

const countChars = () => {
  const pCharCount = document.querySelector('#char-count');
  let count = textArea.value.length;
  let countBack = 500 - count;
  if (countBack === 0) {
    pCharCount.innerHTML = 'Limite de caracteres alcançado'
  } else {
    pCharCount.innerHTML = `${countBack} caracteres restantes`;
  }
}
textArea.addEventListener('keyup', countChars);

// TENTAR IMPLEMENTAR BOTÃO DE VISUALIZAR SENHA