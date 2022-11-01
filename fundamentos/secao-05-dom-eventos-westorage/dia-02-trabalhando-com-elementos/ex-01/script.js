// 01- Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const tagBody = document.getElementById('bodyTag');

const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício - JavaScript DOM';

let a = tagBody.appendChild(tagH1);


// 02- Adicione a tag main com a classe main-content como filho da tag body;

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
tagBody.appendChild(tagMain);


// 03- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.className = 'center-content';






console.log(tagBody.children)