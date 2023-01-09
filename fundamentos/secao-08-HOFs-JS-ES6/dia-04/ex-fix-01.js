// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['lasanha', 'farofa', 'banana'];

const fruitSalad = (fruit, additional) => {
  const frutiList = [...fruit, ...additional];
  return frutiList;
};

console.log(fruitSalad(specialFruit, additionalItens));