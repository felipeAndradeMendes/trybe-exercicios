export default abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove()
  }
}

// PAREI ANTES DE RESOLVER EX FIX ABA SINTAXE COM INTERFACES E GENERICS