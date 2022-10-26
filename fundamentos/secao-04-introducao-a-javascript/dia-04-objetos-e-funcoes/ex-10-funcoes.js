// 03- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

console.log("Exercicio 03");

function smaller(array) {
    let smallerIndex = 0;

    for (let index in array) {
        
        if (array[smallerIndex] > array[index]) {
            smallerIndex = index;
        }
    }
    return smallerIndex;
}

let array = [2, 4, 6, -7, 10, 0, -3]



console.log(smaller(array));



// console.log( array.indexOf(Math.min(...array)));
