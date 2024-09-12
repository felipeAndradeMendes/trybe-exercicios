// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let array = ['José', 'Lucasildonisldo', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function bigger(array) {
    let biggerOne = 0;
    let biggerString = '';

    for (let el in array) {
        if (array[el].length > biggerOne) {
            biggerOne = array[el].length;
            biggerString = array[el];
        }
    }
return biggerString;
}

console.log(bigger(array));