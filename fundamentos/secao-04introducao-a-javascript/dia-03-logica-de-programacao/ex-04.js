// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1) {
  let isPrime = true;

  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      isPrime = false;
    }    
  }  
  if(isPrime) {
    maiorPrimo = numero;
  }
}

console.log(maiorPrimo)