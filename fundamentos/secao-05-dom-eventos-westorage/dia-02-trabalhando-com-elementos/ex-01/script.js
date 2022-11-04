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
tagMain.appendChild(tagSection);


// 04- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerHTML = 'Olar, sou uma tag p';
tagSection.appendChild(tagP);


// 05- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const tagSectionLeftContent = document.createElement('section');
tagSectionLeftContent.className = 'left-content';
tagMain.appendChild(tagSectionLeftContent);


// 06- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const tagSectionRightContent = document.createElement('section');
tagSectionRightContent.className = 'right-content';
tagMain.appendChild(tagSectionRightContent);


// 07- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const imgSmall = document.createElement('img');
imgSmall.src = 'https://picsum.photos/200';
imgSmall.className = 'small-image';
tagSectionLeftContent.appendChild(imgSmall);


// 08- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const numExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const ulList = document.createElement('ul');
tagSectionRightContent.appendChild(ulList);

for (let i=0; i<10; i+=1) {
    const listLis = document.createElement('li');
    listLis.innerHTML = numExtenso[i];
    ulList.appendChild(listLis);
}


// 09- Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
const qtdH3 = 3;
for (let i=0; i<qtdH3; i+=1) {
    const tagH3 = document.createElement('h3');

    tagH3.innerHTML = `Sou a tag h3 numero ${i+1}`;
    tagMain.appendChild(tagH3);
}



// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 10- Adicione a classe title na tag h1 criada;

tagH1.classList.add('title');


// 11- Adicione a classe description nas 3 tags h3 criadas;

const tagsH3 = document.querySelectorAll('h3');
for (let i=0; i<tagsH3.length; i+=1) {
    tagsH3[i].classList.add('description');;
}
console.log(tagsH3[0].classList);


// 12- Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();






// console.log(tagBody.children);