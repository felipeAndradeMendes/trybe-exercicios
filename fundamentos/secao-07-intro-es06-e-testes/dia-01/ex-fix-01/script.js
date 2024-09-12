const pessoaEstudante = {
};

console.log(pessoaEstudante);

pessoaEstudante.nome = 'Felipe';
pessoaEstudante['Sobrenome'] = 'Mendes';

console.log(pessoaEstudante);

const adicionaPropriedades = (objeto, key, value) => {
  return objeto[key] = value;
};

adicionaPropriedades(pessoaEstudante, 'email', 'felipe@gmail.com');
console.log(pessoaEstudante);

adicionaPropriedades(pessoaEstudante, 'Github', 'GitFelipe');
console.log(pessoaEstudante);

adicionaPropriedades(pessoaEstudante, 'Linkedin', 'LinkFelipao');
console.log(pessoaEstudante);

