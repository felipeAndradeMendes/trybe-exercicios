// A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso:

// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// sort pela idade
// people.sort((a, b) => {
//   return a.age - b.age
// }); 

// sort pelo nome
// Entendendo que se o a for maior que o B, deve retornar positivo (1), para dar o 'ok' para trocar a posição entre eles. Do contrário, se A for menor, retorna negativo (-1) e fica como está.

people.sort((a, b) => {
  return a.name > b.name ? 1 : -1
});

console.log(people);