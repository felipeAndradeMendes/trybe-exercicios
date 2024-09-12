// EXERCÍCIO 01

// Encontre o index através do valor de um elemento
// Escreva um algoritmo que recebe 2 parâmetros:

// Um array contendo um conjunto de números
// O valor de um desses elementos
// Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:

// "Elemento não encontrado no array"

console.log("EXERCÍCIO 01")

let array = [15, 17, 35, 48, 99, 78];
let valor = 5;

if (array.indexOf(valor) === -1) {
    console.log("Elemento não encontrado no array")
} else {
    console.log(array.indexOf(valor));
}

console.log("")

////////
// EXERCÍCIO 02

// Retorne os números ímpares
// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

// Use a seguinte estrutura na impressão:

// "x, y, z, ...n"
console.log("EXERCÍCIO 02")


let arrImpares = [];

for ( let i = 1; i <= 49; i += 2) {
    arrImpares.push(i);
}

console.log(`Imprimindo os numeros ímpares: ${arrImpares}`);

console.log("")


////////


// Números divisíveis por 3
// Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

// Se houver 50 ou mais:

// "Há 50 ou mais números divisíveis por 3"

// Caso o contrário: "Sequência muito pequena."
console.log("EXERCÍCIO 03")


let inicial = 1;
let final = 300;
let newArr = [];

for ( let i = inicial; i <= final; i += 1) {
    newArr.push(i);
}
console.log(`Array criado com os npumeros divisíveis por 3: ${newArr}\n`); 

let counter = 0;

for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i] % 3 === 0) {
        counter += 1;
    }
}

if (counter >= 50) {
    console.log("Há 50 ou mais números divisíveis por 3")
} else {
    console.log("Sequência muito pequena.")
}

console.log("")
