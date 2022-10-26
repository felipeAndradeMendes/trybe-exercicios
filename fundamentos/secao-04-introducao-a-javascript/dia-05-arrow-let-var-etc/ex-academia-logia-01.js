// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:


// let objeto = {
//     area: 0,
//     perimetro: 0,
//   };
  
  // Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

  function calculaQuad(base, altura) {
    let area = base * altura;
    let perimetro = (2 * base) + (2 * altura);

    const objeto = {
        'area': area,
        'perimetro': perimetro
    }
    return objeto;
  }

  console.log(calculaQuad(2, 4));