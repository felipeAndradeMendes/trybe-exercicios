const readLine = require('readline-sync');

const calculaBMI = (weight, height) => {
  result = Math.round(weight / Math.pow(height, 2));
  console.log(`Seu IMC é ${result} - ${bmiCategory(result)}`);

  return result;
};

bmiCategory = (bmi) => {
  if (bmi < 18.5) return 'Abaixo do peso (magreza)';

  if (bmi > 18.5 && bmi < 25) return 'Peso normal';

  if (bmi >= 25 && bmi < 30) return 'Acima do peso (sobrepeso)';

  if (bmi >= 30 && bmi < 35) return 'Obesidade grau I';

  if (bmi >=35 && bmi < 40) return 'Obesidade grau II';
}

console.log(bmiCategory(10));

calculaInterativo = () => {
  const weight = readLine.questionFloat('Qual seu peso?');
  const height = readLine.questionFloat('Qual sua altura?');

  calculaBMI(weight, height);
};

calculaInterativo();