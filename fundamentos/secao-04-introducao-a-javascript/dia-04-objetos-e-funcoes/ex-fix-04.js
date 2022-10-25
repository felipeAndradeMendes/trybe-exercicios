// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const a = 97;
const b = 198;

function maiorNumero(a, b) {
    return a > b ? a : b;
}

console.log("O maior numero entre a e b é", maiorNumero(a, b))