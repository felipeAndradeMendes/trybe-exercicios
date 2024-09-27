// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checkBet = (betNumber, randomNumber) => {
  // console.log(betNumber);
  // console.log(randomNumber);
  return betNumber === randomNumber;
};

const sorteador = (betNumber, callback) => {
  const randomNumber = Math.ceil(Math.random() * 6);

  return  callback(betNumber, randomNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(sorteador(3, checkBet));
// console.log(ramdomize());