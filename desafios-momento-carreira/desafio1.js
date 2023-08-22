//  Momento carreira 22/08

var coinChange = function(coins, amount) {
  const resultArray = []
  let currAmount = amount
  coins.sort((a, b) => b - a)

  // return coins
  coins.forEach(coin => {
    const many_coins = Math.floor(currAmount / coin);
    if (many_coins > 0) {
      for (let i = 0; i < many_coins; i++) {
        resultArray.push(coin)
        currAmount -= coin
      }
    }
  });
  return resultArray;
}

console.log(Math.floor(67 / 33))

// Exemplo de uso
// const valor = 67;
const valor = 6249;

// const moedas = [100, 50, 25, 10, 5, 1];
const moedas = [186, 419, 83, 408];

const resultado = coinChange(moedas, valor);
console.log(resultado);