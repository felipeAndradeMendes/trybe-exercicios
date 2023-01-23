// 🚀 Exercício 4
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },  
];

const isBornIn20Century = (date) => {
  return date <= 2000 && date >= 1901;
};

const filterPeople = (array) => {
  const filterAus20 = array.filter((person) => {
    const { bornIn, nationality } = person;
    return (nationality === 'Australian') && isBornIn20Century(bornIn);
  });

  return filterAus20;
};  

console.log(filterPeople(people));