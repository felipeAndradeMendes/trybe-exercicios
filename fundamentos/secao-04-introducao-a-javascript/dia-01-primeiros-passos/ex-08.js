const salarioBruto = 3000;
let descontoInss;


if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * 0.11;;
} else if (salarioBruto > 5189.82) {
    descontoInss = 570.88
}

let salarioDescontadoInss = salarioBruto - descontoInss;
let descontoIr;

if (salarioDescontadoInss <= 1903.98) {
    descontoIr = 0;
    console.log(descontoIr)
} else if (salarioDescontadoInss > 1903.98 && salarioDescontadoInss <= 2826.65) {
    descontoIr = (salarioDescontadoInss * 0.075) - 142.8;
    console.log(descontoIr)
} else if (salarioDescontadoInss > 2826.65 && salarioDescontadoInss <= 3751.05) {
    descontoIr = (salarioDescontadoInss * 0.15) - 354,80;
    console.log(descontoIr)
} else if (salarioDescontadoInss > 3751.05 && salarioDescontadoInss <= 4664.68) {
    descontoIr = (salarioDescontadoInss * 0.225) - 636,13;
    console.log(descontoIr)
} else if (salarioDescontadoInss > 4664.68) {
    descontoIr = (salarioDescontadoInss * 0.275) - 869,36;
    console.log(descontoIr)
}

let salarioLiquido = salarioDescontadoInss - descontoIr;

//Valores do programa
console.log("Salário Bruto:", salarioBruto);
console.log("Desconto do INSS:", descontoInss);
console.log("Salário com desconto do INSS:", salarioDescontadoInss);
console.log("Desconto do IR:", descontoIr);
console.log("O salário liqido é =", salarioLiquido);