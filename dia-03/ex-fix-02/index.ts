import CharacaterService from "./CharacterService";
import LocalDbModel from "./LocalDbModel";
import MockDbModel from "./MockedDbModel";

export interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

export const db: DbCharacter[] = [];

export interface Imodel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

const A = new CharacaterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacaterService(new MockDbModel());
B.getAll().then(console.log);