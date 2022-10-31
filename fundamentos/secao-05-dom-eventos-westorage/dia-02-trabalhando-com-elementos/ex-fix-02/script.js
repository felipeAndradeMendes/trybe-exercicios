// 01- Crie um irmão para elementoOndeVoceEsta.
const elementPai = document.getElementById('pai');
// console.log(elementOnde)
let irmaoOnde = document.createElement('section');
irmaoOnde.id = 'elementoIrmaoOndeVcEsta';
elementPai.appendChild(irmaoOnde);
// console.log(elementPai.childNodes)

// 02- Crie um filho para elementoOndeVoceEsta.
const elementOnde = document.getElementById('elementoOndeVoceEsta');
let filhoOnde = document.createElement('section');
filhoOnde.id = 'filhoDeOndeVoceEsta';
elementOnde.appendChild(filhoOnde);
// console.log(elementOnde.childNodes);

// 03- Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filho1 = document.createElement('section');
filho1.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filho1);
// console.log(primeiroFilhoDoFilho.childNodes);

// 04- A partir desse filho criado, acesse terceiroFilho.
const filhoDoPrimeiroFilhoDoFilho = document.getElementById('filhoDoPrimeiroFilhoDoFilho');
console.log(filhoDoPrimeiroFilhoDoFilho
    .parentElement
    .parentElement
    .nextElementSibling);