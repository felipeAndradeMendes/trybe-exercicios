// 1 - Dada uma matriz, transforme em um array.


const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  const arrayFlatened = arrays.reduce((acc, cur) => {    
    return acc.concat(cur)
  })

  return arrayFlatened;
};

console.log(flatten());
