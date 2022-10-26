// 01- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

console.log("Exercicio 01");

function isPalindrome(word) {
    let stringrevrse =  word.split("").reverse().join("");
    return word === stringrevrse;
}

console.log(isPalindrome('arara'))

console.log();





