// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somaN(n) {
let resposta = "";
let soma = 0;

    for ( let i = 0; i <= n; i += 1) {
        resposta += `${i}+`;
        soma += i;
    }
    return resposta.slice(0, resposta.length-1) + " = " + soma;
}

console.log(somaN(15));