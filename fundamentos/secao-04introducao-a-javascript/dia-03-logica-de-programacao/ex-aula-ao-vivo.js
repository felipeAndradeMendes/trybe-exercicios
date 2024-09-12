// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

let soma = 0;

for (let i = 1; i <= 50; i += 1) {
    soma += i;
}
console.log("Exercicio 01")
console.log(soma);
console.log("")




// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
console.log("Exercicio 02")
let contador = 0;

for (let i=2; i <= 150; i += 1) {
    if (i % 3 === 0) {
        contador += 1;
    }
}
if (contador === 50) {
    console.log("mensagem super-secreta, não leia. Segredo!")
}

console.log("")



// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// pedra > tesoura
// pedra < papel
// tesoura > papel
console.log("Exercicio 03")


let jogador1 = "papel";
let jogador2 = "papel";

if ((jogador1 === "pedra" && jogador2 === "tesoura") || (jogador1 === "tesoura" && jogador2 === "papel") || (jogador1 === "papel" && jogador2 === "pedra")) {
    console.log("Jogador 1 ganhou") 
} else if ((jogador2 === "pedra" && jogador1 === "tesoura") || (jogador2 === "tesoura" && jogador1 === "papel") || (jogador2 === "papel" && jogador1 === "pedra")) {
    console.log("Jogador 2 ganhou")
} else {
    console.log("Empate")
}

console.log("")



// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

console.log("Exercicio 04")

const idade = 98;
let mensagem;

idade >= 18 ? mensagem = "A pessoa é maior de idade" : mensagem = "A pessoa é menor de idade";
console.log(mensagem);

console.log("")


// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

console.log("Exercicio 05")

const carolzita = 10;
const murilo = 8;
const baeta = 91;

if (carolzita < murilo && carolzita < baeta) {
    console.log(`Carolzita é a pessoa mais nova`);
} else if (murilo < baeta) {
    console.log(`Murilo é a pessoa mais nova`);    
} else {
    console.log(`Baeta é a pessoa mais nova`);
}

console.log()
