export default class Subject {
  constructor(private name: string) {};

  public getName(): string {
    return this.name;
  }
  public setName(newName: string): void {
    if (newName.length < 3) {
      throw new Error("The name must have at least 3 characteres");      
    }
    this.name = newName;
  }


}