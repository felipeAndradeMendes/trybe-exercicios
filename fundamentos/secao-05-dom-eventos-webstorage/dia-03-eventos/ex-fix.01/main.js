const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const ulList = document.getElementsByClassName('container')[0];

console.log(ulList.children)

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: Foi usado transform para alterar a posição dessa caixa.





// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

//*** IMPORTANTE: praacessar as propriedades de um elemento tem que usar o target */

// função que que cria class no elemnto clicado e chama função testList;
function addClassTech(element) {
    element.target.classList.add('tech');
    testList(element.target.id)
    // console.log(element.target.classList);
    // console.log(element.target.innerText)
}

// event listeners para os tres elementos
firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click',addClassTech);
thirdLi.addEventListener('click', addClassTech);

// função que testa os itens da lista e tira a class 'tech' se não for o lemento clicado;
function testList(element) {
    let liArray = ulList.children;

    for (let i = 0; i < liArray.length; i += 1) {
        if (liArray[i].id !== element) {
            // console.log(liArray[i])
            liArray[i].classList.remove('tech');
        }
    }
// console.log(ulList.children)

}




// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', changeText);

function changeText(element) {
    // console.log(element.target.value);
    let classtech = document.querySelector('.tech');
    classtech.innerText = element.target.value;
    // implementar apagar input quando clicar em outro elemento tech;
}






// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', goToWebpage);

function goToWebpage() {
    window.open('https://felipeandrademendes.github.io/portifolio-web/');
    // console.log('clicou duas vezes');
    // implementar mouse seta quando acima da frase 'Meu top 3 do Spotrybefy';
}





// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;


function originalColor(element) {
    element.target.style.color = 'white';
}

function changeColor(element) {
    element.target.style.color = 'red';
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', originalColor);

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.