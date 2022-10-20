//OPERAÇÕES ARITIMÉTICAS

const a = 10;
const b = 13;

// Adição
console.log("Adição =", a + b);

// Subtração
console.log("Subtração =", a - b);

// Multiplicação
console.log("Multiplicação =", a * b);

//Divisão
console.log("Divisão =", a / b);

/////////////////////////

//OPERAÇÕES CONDICIONAIS

//Programa 06
const num1 = 34;
const num2 = 107;

if (num1 > num2) {
    console("O maior numero é", num1)
} else {
    console.log("O maior numero é", num2)
}

//Programa 07
const num3 = 7;
const num4 = 1908;
const num5 = 670;

if (num3 > num4) {
    if (num3 > num5) {
        console.log("O maior numero é =", num3)
    } else {
        console.log("O maior numero é =", num5)
    }
} else if (num4 > num5) {
    console.log("O maior numero é =", num4)
} else {
    console.log("O maior numero = ", num5)
}

//Programa 08
const valor1 = 0;

if (valor1 > 0) {
    console.log("Positive")
} else if (valor1 < 0) {
    console.log("Negative!")
} else {
    console.log("Zero!")
}

//Program 09
const angulo1 = -30;
const angulo2 = 130;
const angulo3 = 20;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && angulo1 + angulo2 + angulo3 === 180){
    console.log(true)
} else {
    console.log(false)
}

//Programa 10
const pecaXadrez = "CAValo";
const pecaLowerCase = pecaXadrez.toLocaleLowerCase();
switch(pecaLowerCase) {
    case "dama":
        console.log("Qualquer direção, inúmeras casa");
        break;

    case "torre":
        console.log("Linha reta, vertical ou horinzontal, inúmeras casas");
        break;

    case "bispo":
        console.log("Diagonal, inúmeras casas");
        break;

    case "cavalo":
        console.log("Em L, pula outras peças");
        break;

    case "peao":
        console.log("Uma casa pra frente, exceto primeiro movmento");
        break;

    case "rei":
        console.log("Qualquer direção, somente uma casa")
        break;

    default:
        console.log("peça inválida");
}

//Programa 11
const notaAluno = -90;

if (notaAluno < 0 || notaAluno > 100) {
    console.log("ERRO, nota invalida. Insira nota de 0 a 100")
} else if  (notaAluno >= 90) {
    console.log("A")
} else if  (notaAluno >= 80) {
    console.log("B")
} else if  (notaAluno >= 70) {
    console.log("C")
} else if  (notaAluno >= 60) {
    console.log("D")
} else if  (notaAluno >= 50) {
    console.log("E")
} else if  (notaAluno < 50) {
    console.log("F")
} 

//Programa 12
const numero1 = 121;
const numero2 = 13;
const numero3 = 117;

if (numero1 % 2 === 0 || numero2 % 2 === 0 | numero3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//Programa 13
const numero4 = 122;
const numero5 = 14;
const numero6 = 118;

if (numero4 % 2 !== 0 || numero5 % 2 !== 0 | numero6 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//Programa 14
const custoProduto = -15;
const valorVenda = 30;

let custoTotal = custoProduto + (custoProduto * 0.2);
const lucro = valorVenda - custoTotal;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("ERRO! Valor inválido. Encerrando programa")
} else {
    console.log("Lucro =", lucro)
}


