// 01- Acesse o elemento elementoOndeVoceEsta.
const element1 = document.getElementById('elementoOndeVoceEsta');


// 02- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// console.log(element1.parentNode);
element1.parentNode.style.color = 'red';


// 03- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// console.log(element1.firstElementChild);
element1.firstElementChild.innerHTML = 'Adicionando um texto ao elemento primeiroFilhoDoFilho';

// 04- Acesse o primeiroFilho a partir de pai.
const elementPai = document.getElementById('pai');
console.log(elementPai.firstElementChild);

// 05- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(element1.previousElementSibling);

// 06- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(element1.nextSibling);

// 07- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(element1.nextElementSibling);

// 08- Agora acesse o terceiroFilho a partir de pai.
console.log(elementPai.children[2]);