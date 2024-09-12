// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.

const myRemove = require('./ex-01.js')

describe('Testes da função myRemove', () => {
  
  test('Verifica se função remove item "3"', () => {
    let arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  
  test('Verifica se função não retorna array original [1, 2, 3, 4]', () => {
    let arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifica se função remove item "3"', () => {
    let arr = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).toEqual(myRemove(arr, 5));
  })
});
