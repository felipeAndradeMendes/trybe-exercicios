// Usando o objeto abaixo, faça os exercícios a seguir:
console.log("Exercicio 01");

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // 01- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
  // Bem-vinda, Margarida

  console.log(`Bem-vinda, ${info.personagem}`);

  console.log();


  // 02- Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
//   {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }
console.log("Exercicio 02");


  info["recorrente"] = "Sim";
  console.log(info);

  console.log();


  // 03- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente
console.log("Exercicio 03");


for (let chave in info) {
    console.log(chave);
}

console.log();

// 04- Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim
console.log("Exercicio 04");


for (let valor in info) {
    console.log(info[valor]);
}

console.log();


// 05- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!
console.log("Exercicio 05");


let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for  (let valor in info, info2) {

    if (info[valor] === info2[valor]) {
        console.log("Ambos recorrentes");
    } else {
    console.log(info[valor] + " e " + info2[valor]);
    }
}

console.log();


// 06- 
console.log("Exercicio 06");
