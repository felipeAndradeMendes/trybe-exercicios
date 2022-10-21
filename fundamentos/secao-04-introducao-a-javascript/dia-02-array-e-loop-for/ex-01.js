// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("Requisito 01");
for (num of numbers) {
    console.log(num);
}
console.log("-------------");

// 2- Some todos os valores contidos no array e imprima o resultado;
console.log("Requisito 02");

let resultado = 0;

for (let i = 0; i < numbers.length; i += 1) {
    resultado += numbers[i];
}
console.log("O resultado da soma dos itens do array é:", resultado);

console.log("-------------");

// 3- Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
console.log("Requisito 03");

let media = resultado / numbers.length;
console.log("A média aritmética do array é:", media);

console.log("-------------");


// 4- Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
console.log("Requisito 04");

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

console.log("-------------");

// 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("Requisito 05");

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    } 
}
console.log("O maior elemento do array é:", maior);

console.log("-------------");

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
console.log("Requisito 06")

let qtdImpares = 0;

for (let i=0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        qtdImpares += 1;
    }
}
if (qtdImpares === 0) {
    console.log("nenhum valor impar encntrado");
} else {
    console.log("A quantidade de valores ímpares é:", qtdImpares);
}
console.log("-------------");


// 7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;
console.log("Requisito 07")

let menor = 200;

for (let i=0; i < numbers.length; i += 1) {
    // menor = numbers[i]
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log("O menor elemento é:", menor);

console.log("-------------");


// 8- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log("Requisito 07")

let arr = [];

for (let i=1; i <=25; i += 1) {
    arr.push(i);
}

console.log("Cria o array com 25 elementos de 1 a 25:", arr);

console.log("-------------");


// 08- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2;

console.log("Requisito 08")

for (el of arr) {
    console.log("Elemento " + el + " / " + "2 = " + el / 2)
}

console.log("-------------");
