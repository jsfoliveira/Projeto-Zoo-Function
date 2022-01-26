const data = require('../data/zoo_data');
// RESOLUÇÃO: fiz o object destructiring, acessei o species do data e fiz um find para procurar. o find apresenta o HOF, que diz: se o name do animal que digitei como parâmetro for o element.name, vai retornar true e vai acessar o residents desse animal. O teste pediu um resultado boleado e que teste todos os elementos, pensei em colocar every. Se dentro de todos os ages que estão no residents tiver um número menor que coloquei no parâmetro, retorne false.
function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const acessarResidents = species.find((element) => element.name === animal).residents;
  return acessarResidents.every((element) => element.age >= age);
}
console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
