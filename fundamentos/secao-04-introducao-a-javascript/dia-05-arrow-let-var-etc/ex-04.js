// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// Exemplo:

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.



const longestWord = (frase) => {
    let fraseArr = frase.split(" ");

    let bigger = "";
    let count = 0;
    // let index = 0;

    for (let i in fraseArr) {
        if (fraseArr[i].length > count) {
            bigger = fraseArr[i];
            count = fraseArr[i].length;
            // index = i;
        }
    }
    // return fraseArr[index]; para usar se for usar o let index
    return fraseArr[fraseArr.indexOf(bigger)];
}


console.log(longestWord('Antônio foi no banheiro e não , e jamais saberriamosmesmamente ou sabemos o que aconteceu'));



// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().


const metodoSort = phrase => {
    let newPhrase = phrase.split(" ");
    let newSort = newPhrase.sort((a, b) => b.length - a.length);
    return newSort[0];
}

console.log(metodoSort('Antônio foi no cincomilcachorradamenteszente banheiro e não antecipadamentemente sabemos o que aconteceu'));