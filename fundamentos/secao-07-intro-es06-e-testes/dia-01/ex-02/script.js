const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const cliente = order.name;
  const pessoaEntregadora = order.order.delivery.deliveryPerson;
  const tel = order.phoneNumber;
  const endereco = Object.values(order.address);

  const mensagem = `Olá ${pessoaEntregadora}, entrega para: ${cliente}, Telefone: ${tel}, ${endereco[0]}, Nº: ${endereco[1]}, AP: ${endereco[2]}.`;

  console.log(mensagem);
};

customerInfo(order);

console.log('-----------------');

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const nome = order.name;
  const pizza = Object.keys(order.order.pizza);
  const bebidas = Object.values(order.order.drinks.coke);
  let valorTotal = order.payment.total;
  valorTotal = 50;

  const mensagem = `Olá ${nome}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebidas[0]} é R$ ${valorTotal},00.`;
  
  console.log(mensagem);
};

orderModifier(order);