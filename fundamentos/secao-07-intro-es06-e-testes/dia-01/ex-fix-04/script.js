const coutries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(coutries);
console.log(pairKeyValue);

for (let i in pairKeyValue) {
  console.log('');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('capital:', pairKeyValue[i][1]);

}