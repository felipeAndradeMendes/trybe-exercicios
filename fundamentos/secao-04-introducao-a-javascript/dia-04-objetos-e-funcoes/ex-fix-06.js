// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const a = 0;

function signal(a) {
    return a > 0 ? "positive"
          : a < 0? "negative"
          : "zero";
            
}

console.log(signal(a));