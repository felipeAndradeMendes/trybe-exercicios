// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = () => {
  const newArr = [];
  names.forEach((name) => newArr.push(name.split('')));
  // Poderia ter usado o names.join() pra juntar  todos os nomes...

  const mergedArr = newArr.reduce((acc, cur) => {
    return acc.concat(cur) ;
  });

  const res = mergedArr.reduce((acc, cur)=>{
    return cur.toLowerCase() === 'a' ? acc += 1 : acc += 0;
  }, 0);
  
  return res;
};

console.log(countA());
