export default class LocalDbModel implements Imodel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }

  findIndexById = (id: number): number => {
    const indexFound = db.findIndex((item) => item.id === id);
    if (indexFound < 0) {
      throw new Error("Character not found");      
    }
    return indexFound;
  }

  update = async (id: number, character: Character) => {
    const characterIndex = this.findIndexById(id);
    db[characterIndex] = { id, ...character };
    return db[characterIndex];
  }

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }

  getAll = async () => db;

  getById = async (id: number) => {
    const characterIndex = this.findIndexById(id);
    return db[characterIndex];
  }
}

// PAREI FEITO EX FIX 02 ABA SINTAXE COM GENERICS - FINAL DA PAGINA