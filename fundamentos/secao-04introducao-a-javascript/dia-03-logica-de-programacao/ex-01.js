// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let numFat = 10;
let fatorial = 1;

for (let i = numFat; i > 0; i -= 1) {
    fatorial *= i;
}

console.log(fatorial);