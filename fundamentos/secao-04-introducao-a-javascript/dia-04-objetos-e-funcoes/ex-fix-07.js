// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 25;
const b = 45;
const c = 110;

function istriangle() {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "ERRO! Um dos angulos é inválido (<= 0"
    }

    return a + b + c === 180;
}

console.log(istriangle(a, b, c));