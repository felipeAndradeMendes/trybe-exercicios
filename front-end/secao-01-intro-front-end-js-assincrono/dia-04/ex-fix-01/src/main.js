import Swal from 'sweetalert2'

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

// const erroMsg = Swal.fire('Any fool can use a computer');

const checkForErrors = (response) => {
const errorTrue = {
  "erro": true
  };  
// console.log('ERRORTRUE:', errorTrue.erro)
// console.log('RESPONSE:', response.erro)

  if (response.erro === errorTrue.erro) {
    // console.log('ERROOOOO');
    throw new Error('CEP inválido');
  }
};

async function handleClick() {
  const cep = inputEl.value;

  try {
    preEl.innerHTML = '';
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    checkForErrors(data)
    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return Swal.fire(error.message);
  }
}
