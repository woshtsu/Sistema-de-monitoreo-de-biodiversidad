import { animalsJSON } from "../util/animalJSON.js";
import { randomInt } from 'node:crypto'

export class animalsModel {
  static async getAll() {
    return animalsJSON
  }
  static async getById({ id }) {
    const founAnimal = animalsJSON.find(animal => animal.id === Number(id))
    if (founAnimal) return founAnimal
  }
  static async create({ input }) {
    const newAnimal = {
      id: randomInt(100),
      ...input
    }
    return newAnimal
  }
  static async delete({ input }) {
    const animalIndex = animalsJSON.findIndex(animal => animal.id === Number(input))
    if (animalIndex === -1) return false
    // animalsJSON.splice(animalIndex,1) //Borrar en la bd
    return true
  }

  static async update({ id, input }) {
    const animalIndex = animalsJSON.findIndex(animal => animal.id === Number(id))
    if (animalIndex === -1) {
      return { error: "No se encontró por index" }
    }
    const modifyAnimal = {
      ...animalsJSON[animalIndex],
      ...input
    }
    return modifyAnimal
  }
}