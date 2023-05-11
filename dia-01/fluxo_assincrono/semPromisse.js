function calcularDivisao(num1, num2) {
  if (num2 === 0) throw new Error("Não pode dividir por 0");

  const resultado = num1 / num2;
  return resultado;
};

try {
  const res = calcularDivisao(2, 2);
  console.log(res);
}
catch(erro) {
  console.log(erro.message);
}
