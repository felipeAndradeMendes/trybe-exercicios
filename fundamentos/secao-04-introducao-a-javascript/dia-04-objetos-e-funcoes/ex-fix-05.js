// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 220;
const b = 276;
const c = 200;

function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log("O maior entre a, b e c é:", maiorDeTres(a, b, c));