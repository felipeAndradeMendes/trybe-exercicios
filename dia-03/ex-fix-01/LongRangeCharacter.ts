import Character from "./Character"

export default class LongRangeCharacter extends Character{
  constructor(private name: string, private specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi, I'm ${this.name}, I attack at long range`);
  }

  specialMove(): void {
    console.log(`${this.name}'s special move is ${this.specialMoveName}`);
  }
}