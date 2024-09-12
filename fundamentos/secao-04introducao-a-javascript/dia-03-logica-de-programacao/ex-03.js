// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css', "jiriboiamundachera", "oiasd", "oia"];
let countArray = [];

let counterMaior = "";

// Contado o length de cada palavra e colocando o valor em um novo array "countArray";
for (let i = 0; i <array.length; i += 1) {
    countArray.push(array[i].length);
}
console.log(`countArray = ${countArray}`)
console.log("")

// Associando o maior valor de length no "countArray' à mesma posição do array "array" - [4,10,6,4,3]

for (let i = 0; i < countArray.length; i += 1) {

    if (countArray[i] > counterMaior.length) {
        counterMaior = array[i];
    }  
}


// Testando a menor string baseada no valor da maior string encontrada anteriormente.
// Usa o "countArray" para descobrir o de menor valor e associa ao "array" a mesma posição.
// Esse algoritimo encontra a primeira menor string. Se houver outras do mesmo tamanho, não considera.
let maiorString = counterMaior.length;
let counterMenor = "";

for (let i = 0; i < countArray.length; i += 1) {

    if (countArray[i] < maiorString){       
        maiorString = countArray[i];        
        counterMenor = array[i];
    }    
}


console.log(`Maior string é: ${counterMaior}`);
console.log(`Menor string é: ${counterMenor}`)





// for (let i = 0; i < array.length; i += 1) {

//     for (let j = 0; j < array[i].length; j += 1) {

//     }
// }