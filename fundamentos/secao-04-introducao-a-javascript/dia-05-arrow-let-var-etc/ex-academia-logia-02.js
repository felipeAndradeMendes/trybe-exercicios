// / Exercício 2 - Crie uma função que, dado um array de números inteiros,
// // retorne a quantidade de números pares e ímpares no formato abaixo:

// let numeros = {
//   pares: 0,
//   ímpares: 0,
// };

function calculaParesEImmpares (arr) {
    let contImpares = 0;
    let contPares = 0;
    
      for (let i in arr) {
        arr[i] % 2 === 0 ? contPares += 1 : contImpares += 1;
      }
    
      let objeto = {
        pares: contPares,
        impares: contImpares
      }
    
      return objeto
    }
    
    console.log(calculaParesEImmpares([0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9]))