export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error("Not implemented");    
  }

  abstract maxLifePoints(): number;

  // GETTERS
  get name() {
    return this._name;
  }
  get dexterity() {
    return this._dexterity;
  }

  // SETTERS
  // set name(newName: string) {
  //   this._name = newName;
  // }
  // set dexterity(newDexterity: number) {
  //   this._dexterity = newDexterity;
  // }  
}