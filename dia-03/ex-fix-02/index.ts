interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface Imodel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}