import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee{
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }
  // SUBJECT
  getSubject(): Subject {
    return this._subject;
  }
  setSubject(newSubject: Subject):void {
    this._subject = newSubject;
  }
  // SALARY
  get salary(): number {
    return this._salary;
  }
  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');
    this._salary = value;
  }
  // REGISTRATION
  get registration(): string {
    return this._registration;
  }
  set registration(value: string) {
    if (value.length < 16) {
      throw new Error("Must have more than 16 characteres");
    }
    this._registration = value;
  }
  // ADMISSION DATE
  get admissionDate(): Date {
    return this._admissionDate;
  }
  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error("Must be a present or past date");      
    }
    this._admissionDate = value;
  }
  // GENERATE REGISTRATION
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `TPRF${randomStr}`;
  }
}

console.log(new Teacher('Felipe', new Date('1984/07/30'), -1, new Subject('Dev')))
const teacher1 = new Teacher('Felipe', new Date('1984/07/30'), -1, new Subject('Dev'))
console.log(teacher1.salary)