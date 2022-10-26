// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

// SOLUÇÃO 01 - MAIS DIFICIL

// const verificaEnd = (word, ending) => {
//     let wordArr = word.split("");
//     let endingArr = ending.split("");
//     let newWord = [];
//     let wordlength = word.length;
//     let endingLength = ending.length;
//     let stopI = wordlength - endingLength ;
//     let status = null;
    
//     for (let i = word.length - 1; i >= stopI; i -= 1) {
//         newWord.unshift(wordArr[i]);
//     }
//     for (let i in newWord, endingArr) {
//         if (newWord[i] !== endingArr[i]) {
//             status = false
//             break;
//         } else {
//             status = true
//         }
//     }

//     return status;
//   }
  
//   console.log(verificaEnd('manjubeiradabahia', 'gia'));



// SOLUÇÃO 02 - MAIS RAPIDA E PRATICA

const verificaEnd = (word, ending) => {
    let newWord = word.slice(word.length - ending.length, word.length);
    return newWord === ending;
}

console.log(verificaEnd('meucu', 'ucu'));