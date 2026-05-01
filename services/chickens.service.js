import { v4 as uuidv4 } from 'uuid';
import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensService
{
  static getChickens = () =>
  {
    console.log('\tChickensService: getChickens()');
    return ChickensRepository.getChickens();
  }

  // getChickenById
  static getChickenById = (id) =>
  {
    console.log(`\tChickensService: getChickenById(${id})`);
    return ChickensRepository.getChickenById(id);
  }

  // createChicken
  static createChicken = (newChicken) =>
  {
    console.log('ChickenService : createChicken()');

    newChicken.id = uuid();
    return ChickensRepository.createChicken(newChicken);
  }

  // replaceChicken
  static creplaceChicken = (id, replaceChicken) =>
  {
    console.log('ChickenService : replaceChicken()');

    replaceChicken.id = id;
    return ChickensRepository.replaceChicken(replaceChicken);
  }

  // updateChicken

  // deleteChicken
}