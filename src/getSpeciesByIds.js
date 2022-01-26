const data = require('../data/zoo_data');
// RESOLUÇÃO: Fiz o object destructuring para acessar o specis no data. Fiz um (...ids) para acessar todos os ids. Se o que eu não digitar nada como parâmetro, deve retornar um array vazio. Fiz um map para percorrer cada especie.id(que vai verificar o id de cada especie, se é igual ao que digitei), vai retornar o array da especie.Tive ajuda da minha colega Noelma.
function getSpeciesByIds(...ids) {
  const { species } = data;
  if (ids === undefined) {
    return [];
  }
  const result = ids.map((elemento) => species.find((especie) => especie.id === elemento));
  return result;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
