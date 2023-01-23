// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const employeeGenerator = (fullName) => {
  const nameSpaces = fullName.toLowerCase().split(' ').join('_');
  const personObj = { name: fullName, email: `${nameSpaces}@trybe.com` };

  return personObj;
};

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'), 
    id2: employeeGenerator('Luiza Drumond'), 
    id3: employeeGenerator('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(employeeGenerator));