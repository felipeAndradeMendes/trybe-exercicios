// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false

let word = 'joaofernando';
let ending = 'fernan';

function verifica(word, ending) {
    let end = ending.length;
    let endOfWord = word.slice(word.length-end, word.length);

    return ending === endOfWord;
}

console.log(`A palavra "${word}" tem o final igual a "${ending}" ? resposta:`, verifica('trybe', 'be'));
