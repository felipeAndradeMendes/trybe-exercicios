// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let arr = [2, 3, 2, 5, 8, 2, 18, 3, 18, 3, 18, 18];

function repeat(arr) {
    let indexNumeroRepetido = 0;
    let contNumeroRepetido = 0;
    let contNumeroChecando = 0;

    for (let i = 0; i < arr.length; i += 1) {
        contNumeroChecando = 0;
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[i] === arr[j]) {
                contNumeroChecando += 1;
            }
        }
        if (contNumeroChecando > contNumeroRepetido) {
            contNumeroRepetido = contNumeroChecando;
            indexNumeroRepetido = arr[i];
        }
    }
    return indexNumeroRepetido;
}

console.log(repeat(arr));