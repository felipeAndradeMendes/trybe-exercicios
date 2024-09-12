// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 12;
let b = 98;

function adicao(a, b) {
    return a + b;
}
console.log("Adição entre a e b =", adicao(a, b));

function subtracao() {
    return a - b;
}
console.log("Subtração entre a e b =", subtracao(a, b));

function multiplicacao() {
    return a * b;
}
console.log("Multiplicação entre a e b =", multiplicacao(a, b));


function divisao() {
    return a / b;
}
console.log("Divisão entre a e b =", divisao(a, b));

function modulo() {
    return a % b;
}
console.log("Módulo entre a e b =", modulo(a, b));
