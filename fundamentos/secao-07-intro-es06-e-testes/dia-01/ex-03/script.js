const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const createNigthShift = (object, key, value) => {
  object[key] = value;
};
console.log(lesson2);
createNigthShift(lesson2, 'turno', 'noite');
console.log(lesson2);


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => {
  return Object.keys(object);
};
console.log(listKeys(lesson1));


// Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => {
  const obj = Object.keys(object);
  const objLen = obj.length;
  return objLen;
};
console.log(objectLength(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (object) => {
  return Object.values(object);
};
console.log(listValues(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

