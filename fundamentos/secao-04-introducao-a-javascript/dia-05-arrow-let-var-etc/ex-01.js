// Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// Copie o código abaixo e rode-o para verificar sua saída:
// NÃO TEM O CÓDIGO NA PLATAFORMA




// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:


    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`

    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa.nome = "Luna";
      pessoa.idade = "19";

      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);


// Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
// 🚀 Transforme a função numeroAleatorio em uma arrow function;
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());



// Transforme a função hello em uma arrow function;
// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));


const hello = nome => `Olá, ${nome}`;
console.log(hello('Felipe'));


// Transforme a função nomeCompleto em uma arrow function
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

let nome = 'Ivan';
let sobrenome = 'Pires';

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(nomeCompleto('Felipe', 'Mendes'));



// Altere a expressão if/else utilizando ternary operator
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;
const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade`
                                        : `Você está na velocidade permitida`;

console.log(speedCar(119));
