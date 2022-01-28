const data = require('../data/zoo_data');

// Requisito feito com ajuda da Noelma, tive muita dificuldade pra resolver sozinha.
// RESOLUÇÃO(requisitos 1 e 2): Criei constantes para localizar onde está cada animal. Com o filter eu vou filtrar só os que tem, por exemplo, specie.location igual ao 'NE'. O map eu usei para criar um novo array contendo os nomes das espécies que estão localizadas nesses lugares. Criei 4 array. Depois criei um objeto para guardar todos esses arrays (objEspLocal).
const { species } = data;
function localNome(location) {
  const ne = species.filter((element) => element.location === 'NE');
  const nw = species.filter((element) => element.location === 'NW');
  const sw = species.filter((element) => element.location === 'SW');
  const se = species.filter((element) => element.location === 'SE');

  const especieNe = ne.map((element) => element.name);
  const especieNw = nw.map((element) => element.name);
  const especieSw = sw.map((element) => element.name);
  const especieSe = se.map((element) => element.name);

  const objEspLocal = {
    NE: especieNe,
    NW: especieNw,
    SE: especieSe,
    SW: especieSw,
  };
  return objEspLocal;
}

// RESOLUÇÃO(requisito 4): Fiz uma função com parâmetro. Coloquei um reduce para acumular os itens. Criei um objeto vazio para adicionar os nomes dos residentes. Fiz um map para devolver um novo array com os nomes do residentes. Se no acumulador, a chave location não tiver nada, então crie uma chave location dentro do acumulador, gere um array vazio. Esse array vazio deve ser adicionado na chave vazia, o nomeDosResidentes.
const nameResidentes = (sorted) => species.reduce((acc, item) => {
  const { location, name, residents } = item;
  const nomeDosResidentes = {};
  const arrayResidents = residents.map((residentes) => residentes.name);
  if (acc[location] === undefined) {
    acc[location] = [];
  }
  acc[location].push(nomeDosResidentes);

  // RESOLUÇÃO(requisito 5):Se o parâmetro passado for igual ao name do nomeDosResidentes, retorna o array dos residentes em ordem alfabética; se não, retornar o array normal.
  nomeDosResidentes[name] = sorted ? arrayResidents.sort() : arrayResidents;
  return acc;
}, {});

// Requisito 06: Agora eu tenho dois parâmetros. Fiz o reduce para ir acumulando todos os itens. Criei um objeto vazio. Filtrei todos os sexos dos residentes que foi colocado como parâmetro e criei um novo array com o resultado dele.
const functionSex = (sex, sorted) => species.reduce((acc, item) => {
  const { location, name, residents } = item;
  const residentsNames = {};
  const sexoDosResidentes = residents
    .filter((element) => element.sex === sex)
    .map((elemento) => elemento.name);
  if (acc[location] === undefined) {
    acc[location] = [];
  }
  acc[location].push(residentsNames);
  // RESOLUÇÃO(requisito 7): ordenar os nomes dos animais macho/fêmea.
  if (sorted === 'sorted') {
    residentsNames[name] = sexoDosResidentes.sort();
  } else {
    residentsNames[name] = sexoDosResidentes;
  }
  return acc;
}, {});

// RESOLUÇÃO: se o includeNames não for especificado, retorna a função que traz objeto com espécie e localização.
function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return localNome();
  }
}

module.exports = getAnimalMap;
