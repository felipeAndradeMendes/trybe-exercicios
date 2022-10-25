// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
// Por exemplo, a palavra “banana” seria invertida para “ananab”. 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let secondWord = ""

for (let i = word.length - 1; i >= 0; i -= 1) {
    secondWord += word[i];
}

console.log(secondWord);