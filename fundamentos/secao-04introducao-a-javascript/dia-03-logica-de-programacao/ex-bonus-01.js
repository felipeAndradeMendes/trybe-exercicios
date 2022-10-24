// 01- Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

// n = 5

// *****
// *****
// *****
// *****
// *****

console.log("Exercício 01")

let n = 5;

for (let i = 1; i <= n; i += 1) {
let quadrado = "";

    for(let j = 0; j < n; j += 1) {
        quadrado += "*"
    }
    console.log(quadrado)

}

console.log("")


// 02- Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

// n = 5

// *
// **
// ***
// ****
// *****

console.log("Exercício 02")
let b = 0;

for (let i = 1; i <= n; i += 1) {
let quadrado = "";
b += 1;

    for(let j = 0; j < b; j += 1) {
        quadrado += "*"
    }
    console.log(quadrado)

}

console.log("")


// 03- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

console.log("Exercício 03")
let x = n;

let espaco = " ";
let ast = "*";

for (let i = 1; i <= n; i += 1) {
    let triangulo = "";
    x -= 1;

    for(let j = 0; j < n; j += 1) {
        if (j < x) {
            triangulo += " "
        } else {
            triangulo += "*"
        }
    }
    console.log(triangulo)
}

console.log("")


// 04- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****