// 🚀 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes:

// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
 
const studentAverage = () => {
  // .map() para percorrer o arr de notas e reduce para, em cada um, percorrer os valores de dentro e somar. Além disso, no final do reduce, dividir pelo length de cada array de notas, para ter a media.
  const gradesAverage = grades.map((gradeGroup) => gradeGroup
    .reduce((acc, cur) => { return acc + cur;
    }, 0) / gradeGroup.length);

  // Mais um map para percorre o aray students e criar um objeto pra cada aluno, adicionando o nome e o retorno da variavel de media anterior.
  // *** Atenção ao objeto entre parenteses dentro da função, para o js não achar que são chaves de escopo da função;  
  const gradeObj = students.map((student, index) => {
    const obj = ({
      'name': student,
      'average': gradesAverage[index],      
    });
    return obj
  });

  return gradeObj;
};

console.log(studentAverage());
