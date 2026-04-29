export class ChickensRepository
{
  static getChickens = () =>
  {
    console.log('\t\tChickensRepository: getChickens()');
    
    return { // cannot put brace on newline?
      chickens: [],
    };
  }
}