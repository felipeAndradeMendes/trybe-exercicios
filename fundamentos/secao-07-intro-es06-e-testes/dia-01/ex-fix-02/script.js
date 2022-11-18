// Dê uma olhada no exemplo a seguir e pense como você poderia listar somente as chaves desse objeto usando Object.keys();

// const coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };
//  console.log(Object.keys(coolestTvShow)[1]);


 // Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

 const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', 
};

const listaHabilidades = (student) => {
  // console.log(Object.keys(student).length)
  const hab = Object.keys(student);
  for (i in hab) {
    console.log(`${hab[i]}, Nível: ${student[hab[i]]}`);
  }
  return 'olar'
};

console.log(listaHabilidades(student1));
// console.log(student1)
console.log(listaHabilidades(student2));
