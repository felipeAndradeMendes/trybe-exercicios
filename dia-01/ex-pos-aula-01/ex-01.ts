/*
Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
*/

/*
Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
*/

class Student {
  matricula: number;
  nome: string;
  notasProva: number[];
  notasTrabalho: number[];

  constructor(m: number, n:string, nP: number[], nT: number[]) {
    this.matricula = m;
    this.nome = n;
    this.notasProva = nP;
    this.notasTrabalho = nT;
  }

  somaNotasProva(): number {
    const somaNotasProva = this.notasProva.reduce((a, b) => a + b);
    return somaNotasProva;
  }

  somaNotasTrabalho() {
    const somaNotasTrabalho = this.notasTrabalho.reduce((a, b) => a + b);
    return somaNotasTrabalho;
  }
}

const student1 = new Student(1234, 'Felipe', [10, 8, 8, 10], [7, 5]);

console.log(student1);

/*
Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

A pessoa cliente deverá conter o nome;
O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
*/

class Cliente {
  private _nome: string;
  
  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
}

class ItemPedido {
  nomePedido: string;
  preco: number;

  constructor(nomePedido: string, preco: number) {
    this.nomePedido = nomePedido;
    this.preco = preco;
  }
}

class Pedido {
  cliente: Cliente;
  items: ItemPedido[];
  formaPag: string;
  desconto?: number;

  constructor(cliente: Cliente, items: ItemPedido[], formaPag: string, desconto: number) {
    this.cliente = cliente;
    this.items = items;
    this.formaPag = formaPag;
    this.desconto = desconto;
  }

  valorTotal(): number {
    return this.items.reduce((a, b) => {
      return a + b.preco;
    }, 0)
  }

  valorComDesconto(): number | string {
    if (!this.desconto) return 'não existe desconto';
    return this.valorTotal() - (this.valorTotal() * this.desconto);
  }
}

/*
Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

Exercício 6: Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:

constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;
getMonthName: retorna o mês da data por extenso;
isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
0 se as datas forem iguais;
1 se a data corrente for posterior à data do parâmetro;
-1 se a data do parâmetro for posterior à data corrente.
format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
Legenda:
aaaa = ano com quatro dígitos
aa = ano com dois dígitos
mm = mês com 2 dígitos
M = mês por extenso
dd = dia com 2 dígitos
Exemplos:
“dd/mm/aaaa” = 01/01/1900
“aaaa-mm-dd” = 1900-01-01
“dd de M de aa” = 01 de janeiro de 90
“dd, M de aaaa” = 01, janeiro de 1990
*/

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this.dia = (dia >= 1 && dia <= 31) ? dia : 0o1;
    this.mes = (mes >= 1 && mes <= 12) ? mes : 0o1;
    this.ano = (ano >= 1900 && ano <= 2999) ? ano : 1900;
  }

}

/*
Parei no meio do ex 06, pois o gabarito está pessimo de explicação e boa parte 
do exercicio envolvia logica e pouca sintaxe e poo.
*/