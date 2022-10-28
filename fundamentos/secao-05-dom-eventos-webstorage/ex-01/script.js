// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

const mudaTextoParagrafo = () => {
    const paragrafo = document.getElementsByTagName('p');

    texto = 'Daqui a dois anos me imagino trabalhando na área muito feliz.'
    return paragrafo[1].innerText = texto;
}

// console.log(mudaTextoParagrafo());
mudaTextoParagrafo()


// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

const mudaCorMain = () => {
    const mainCor = document.getElementsByClassName('main-content');
    // console.log(mainCor);

    mainCor[0].style.backgroundColor = 'rgb(76,164,109)';
} 
mudaCorMain();
