const data = require('../data/zoo_data');

// RESOLUÇÃO: quando passado no parâmetro o id do funcionário, vai buscar o employess. O acharRespEspec vai procurar o employess (find), vai aparecer um array e com o responsableFlor[0] vou buscar o seu primeiro responsável. Com acharEspecId, eu achei a espécie do id dado no parâmetro. Usei o sort para ordenar o array residents, depois eu retornei o nome, o sexo e a idade do primeiro item do array residents. Eu utilizei o exemplo do sort que tem no course para fazer essa parte. b.age - a.age ficou ao contrário porque eu quero ordenar de ordem decrescente, eu quero pegar o animais mais velho. Na monitoria de Roberval, eu aprendi a indentar o find e o sort em linhas separadas, na mesma variável.
const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const acharRespEspec = employees.find((element) => element.id === id).responsibleFor[0];
  const acharEspecId = species
    .find((especie) => especie.id === acharRespEspec)
    .residents.sort((a, b) => b.age - a.age);
  return [acharEspecId[0].name, acharEspecId[0].sex, acharEspecId[0].age];
}

module.exports = getOldestFromFirstSpecies;
