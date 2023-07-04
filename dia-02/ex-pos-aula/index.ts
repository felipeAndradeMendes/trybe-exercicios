import Person from './Person';
import Student from './Student';
import Subject from './Subject';

// ex 01
const felipe = new Person('Felipe', new Date('1984/07/30'));
const ana = new Person('Ana', new Date('1988/10/28'));

console.log(felipe);
console.log(ana);

// ex 02
const student1 = new Student('Felipe Mendes', new Date('1984/07/30'));
console.log(student1);
student1.setExamsGrades([10, 10, 8, 8])
console.log('EXAM GRADES:', student1.getExamsGrades());
student1.setAssignmentGrades([8, 9]);
console.log('ASSIGNMENT GRADES:', student1.getAssignmentGrades());
student1.generateEnrollment();
console.log('ENROLLMENT:', student1.getEnrollment());

console.log('SUM GRADES:', student1.sumGrades());
console.log('SUM AVERAGE GRADES:', student1.sumAverageGrade());

// 04
const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);