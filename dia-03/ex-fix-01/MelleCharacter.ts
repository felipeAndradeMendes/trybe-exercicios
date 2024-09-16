import Character from "./Character";

export default class MeleeCharacter extends Character{
  constructor(private name: string, private specialMoveName: string) {
    super();
  }

  talk(name: void) {
    console.log(`Hi, I'm ${this.name}. I attack at close range.`);
  }

  specialMove(): void { 
    console.log(`${this.name}'s special move is ${this.specialMoveName}`);
  }
}