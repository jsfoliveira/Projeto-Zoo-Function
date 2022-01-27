const data = require('../data/zoo_data');

// RESOLUÇÃO(parte 1): Se não for passado parâmetro, então retorne um objeto com o element.name e element.residents.length. O forEach vai percorrer cada item do objeto species. Dentro do forEach coloqui objeto[chave] = atribuição e depois retornei (peguei a dica de Luá no Slack).
// RESOLUÇÃO (parte 2): Vou procurar se o nome adiconado no parâmetro se tem alguma chave igual ao parâmetro, se for true, retorna o value da chave residents.length.
// RESOLUÇÃO (parte 3): Estou filtrando os residents, em que resident.sex é igual ao animal.sex(o parâmetro que foi colocado). Tive ajuda da minha colega Noelma para entender essas duas últimas partes.
const { species } = data;
const obj = {};
function countAnimals(animal) {
  if (animal === undefined) {
    species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  const animalCount = species
    .find((specie) => specie.name
      .includes(animal.specie));
  if (!animal.sex) {
    return animalCount.residents.length;
  }
  return animalCount.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
