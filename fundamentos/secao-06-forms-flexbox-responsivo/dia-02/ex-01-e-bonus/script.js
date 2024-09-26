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

// PIKADAY

// let picker = new Pikaday({ field: document.getElementById('datepicker') });




// let field = document.getElementById('datepicker');
// let picker = new Pikaday({
//     onSelect: function(date) {
//         field.value = picker.toString();
//     }
// });
// field.parentNode.insertBefore(picker.el, field.nextSibling);

// toString(date, format = 'DD-YYYY-MM')

// new Pikaday({
//   field: document.getElementById('eDate'), 
//   toString: function(date) {
//       var parts = [('0'+date.getDate()).slice(-2), ('0'+(date.getMonth()+1)).slice(-2), date.getFullYear()];
//       return parts.join("-");
//   }
// })

let field = document.getElementById('datepicker');
let picker = new Pikaday({
    onSelect: function(date) {
      var parts = [('0'+date.getDate()).slice(-2), ('0'+(date.getMonth()+1)).slice(-2), date.getFullYear()];
      // console.log(parts.join("-"))
      return field.value = parts.join("-")
    }
  });
  // field.value = picker;
  field.parentNode.insertBefore(picker.el, field.nextSibling);
