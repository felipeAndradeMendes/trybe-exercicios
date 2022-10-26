// 02- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

console.log("Exercicio 02");

function biggerIndex(array) {
    let biggerNum = 0;
    let newArr = array;

    for (let el of newArr) {

        if (el > biggerNum) {
            biggerNum = el;
        }
   }    
return newArr.indexOf(biggerNum);
}
console.log(biggerIndex([2, 30, 107, 1000, 1, 990, 2000]));

console.log();