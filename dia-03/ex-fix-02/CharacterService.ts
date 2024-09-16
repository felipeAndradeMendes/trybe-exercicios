import LocalDbModel from "./LocalDbModel";
import {Character, Imodel} from './index'

export default class CharacaterService {
  constructor(readonly model: Imodel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter});
  }

  async getAll() {
    const characters = await this.model.getAll();
    return ({ status: 200, data: characters});
  }
}