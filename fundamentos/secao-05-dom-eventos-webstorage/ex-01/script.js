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

    return mainCor[0].style.backgroundColor = 'rgb(76,164,109)';
} 
mudaCorMain();



// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

const mudaCorQuadrado = () => {
    const quadrado = document.getElementsByClassName('center-content');
    // console.log(quadrado);
    return quadrado[0].style.backgroundColor = 'blue';
}

mudaCorQuadrado()


// 4. Crie e execute uma função que corrija o texto da tag <h1>.

const textoTagH1 = () => {
    const tagH1 = document.getElementsByTagName('h1');
    // console.log(tagH1);
    return tagH1[0].innerText = 'Exercício - JavaScript';
}
textoTagH1();



// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

const modificaTamanhoP = () => {
    const tagP = document.getElementsByTagName('p');
    
    return tagP[0].style.textTransform = 'uppercase';
}
modificaTamanhoP();



// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

const exibePs = () => {
    const tagP = document.getElementsByTagName('p');

    // for (let i = 0; i < tagP.length; i += 1) {
    //     console.log(tagP[i].innerHTML);
    // }
    for (let i in tagP) {
        console.log(tagP[i].innerHTML);
    }

}
exibePs();