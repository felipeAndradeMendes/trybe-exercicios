// 01- Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  return console.log(a + b);
}

// sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [primeNummberOne, primeNummberTwo, primeNummberThree] = primeNumbers;
// console.log(sum(primeNummberOne, primeNummberThree));



/////////////////

// 02- A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida); // arroz gato água


//////////////////////////

// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima;

[ , , ,...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
// PARA IGNORAR VALORES DO ARRAY, USE ESPAÇO VAZIO ENTRE VIRGULAS
