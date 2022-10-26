// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// Crie uma função que ligue e desligue um motor de um carro.


// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);

let statusMotor = 'desligado';


// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;

// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);

const ligaDesliga = () => statusMotor === 'desligado' ? statusMotor = 'ligado' : statusMotor = 'desligado';



// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).


console.log(ligaDesliga());
console.log(ligaDesliga());
console.log(ligaDesliga());





// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.



