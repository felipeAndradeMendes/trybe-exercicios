import Race from "./Race";

export default class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number, maxLifePoints: number = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
  }
 
  maxLifePoints(): number {
    return this._maxLifePoints;
  }
}