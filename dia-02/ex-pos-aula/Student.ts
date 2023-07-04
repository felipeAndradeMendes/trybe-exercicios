import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  getEnrollment() {
    return this._enrollment;
  }
  setEnrollment(newEnrollmentStr: string): void {
    if (newEnrollmentStr.length < 16) {
      throw new Error("Enrollment must have at least 16 characteres");      
    }
    this._enrollment = newEnrollmentStr;
  }

  getExamsGrades() {
    return this._examsGrades;
  }
  setExamsGrades(grades: number[]) {
    if (grades.length > 4) {
      throw new Error("Must have maximum of 4 grades");      
    }
    this._examsGrades = grades;
  }

  getAssignmentGrades() {
    return this._assignmentsGrades;
  }
  setAssignmentGrades(grades: number[]) {
    if (grades.length > 2) {
      throw new Error("Must have maximum of 2 grades");      
    }
    this._assignmentsGrades = grades;
  }

  sumExamsgrades(): number {
    return this._examsGrades.reduce((a, b) => {
      return a + b
    }, 0)
  }
  sumAssignmetsGrades(): number {
    return this._assignmentsGrades.reduce((a, b) => {
      return a + b
    }, 0)
  }

  sumGrades(): number {
    return this.sumAssignmetsGrades() + this.sumExamsgrades();
  }

  sumAverageGrade(): number {
    const divider = this._assignmentsGrades.length + this._examsGrades.length;
    return this.sumGrades() / divider;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;    
  }

}