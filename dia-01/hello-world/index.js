const readLine = require('readline-sync');

const name = readLine.question('Qual o seu nome?');
const age = readLine.questionInt('Qual a sua idade?');

console.log(`%c Aqui é o ${name}, de ${age} anos de idade!`, 'color:blue;' );
console.log('%c Olar', 'color:blue;');
