// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

const sum = (...nums) => {
  const sumNumbers = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
  return sumNumbers;
};

console.log(sum(1,2,3,4,5,6,7,8,9,10));