// Crie uma função que calcule a área de um círculo.

// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.

// Com base nessa informação:

// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;

// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);

// Crie a lógica para retornar a área do círculo;

// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

// Exemplo de retorno:

// Parâmetro: 3

// Retorno: Essa é a área do círculo: 28.259999999999998

// Parâmetro: 5

// Retorno: Essa é a área do círculo: 78.5
// formula: area = pi * raio*raio;

const pi = Math.PI;

const circleArea = raio => pi * raio*raio;

console.log(`Essa é a área do círculo: ${circleArea(5).toFixed(5)}`);