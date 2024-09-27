// A tabela abaixo mostra um resumo de como funcionam as HOFs que você aprendeu até agora. Use o seguinte array para visualizar os exemplos da tabela:

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// FOREACH
const arrTestForeach = [];
const testForEach = pessoas.forEach((pessoa) => { return arrTestForeach.push(pessoa.nome, pessoa.idade)});
console.log(arrTestForeach);


// FIND
const testFind = pessoas.find((pessoa) => pessoa.idade === 32);
console.log(testFind);


// SOME
const testSome = pessoas.some((pessoa) => pessoa.name === 'Felipe');
console.log(testSome);


// EVERY
const testEvery = pessoas.every((pessoa) => pessoa.idade > 18);
console.log(testEvery);


// SORT
const testSort = pessoas.sort((a, b) => a.idade > b.idade ? 1 : -1);
console.log(testSort);


// MAP
const testMap = pessoas.map((pessoa) => `Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} de idade`);
console.log(testMap);


// FILTER
const testFilter = pessoas.filter((pessoa) => pessoa.idade < 30);
console.log(testFilter);


// REDUCE
const testReduce = pessoas.reduce((acc, pessoa) => acc.idade < pessoa.idade ? acc : pessoa);
console.log(testReduce);
