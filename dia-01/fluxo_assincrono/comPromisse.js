function calcularDivisao(num1, num2) {
  const promisse = new Promise((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode dividir por 0'));

    const resultado = num1 / num2;

    resolve(resultado);
  })
  
  return promisse;
};

calcularDivisao(2, 0)
  .then((res) => console.log('Resultado: %s', res))
  .catch((err) => console.log('ERRO: %s', err.message));

//* * */

  const promiseParaFazerAlgumaCoisa = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
    })
  }
  
  const assistirAlguemFazendoAlgumaCoisa = async () => {
    const something = await promiseParaFazerAlgumaCoisa()
    return something + '\n e Eu vi você fazendo'
  }
  
  const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
    const something = await assistirAlguemFazendoAlgumaCoisa()
    return something + '\n e Eu também vi você vendo ele fazendo'
  }
  
  AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
    console.log(res)
  })