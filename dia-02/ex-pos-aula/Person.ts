// // EX 01
export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {   
    this._name = name;
    this._birthDate = birthDate;
    this.validatePerson(); 
  }

  getName(): string {
    return this._name;
  }
  setName(newName: string) {
    if (newName.length < 3) {
      throw new Error("O nomoe deve ter pelo menos 3 letras");
    }
    this._name = newName;
  }

  getBirthDate() {
    return this._birthDate;
  }
  setBirthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error("O nomoe deve ter pelo menos 3 letras");
    }
  }
  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > 120) {
      throw new Error(`A pessoa deve ter no máximo 120 anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this._name);
    this.validateBirthDate(this._birthDate);
  }
}

