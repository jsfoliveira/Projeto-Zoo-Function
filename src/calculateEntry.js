const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// RESOLUÇÃO (parte 1): o requisito pede para que o return seja a variável objeto. Eu só fui alterando a quantidade de cada chave.
// RESOLUÇÃO (parte 2): Se o parâmetro passado por vazio ou se não passar nennhum argumento, retorna 0.
// RESOLUÇÃO (parte 3): Acessei o price do data, criei um avariável total com 0 para realizar a contagem, acessei cada item e somei.
function countEntrants(entrants) {
  const objeto = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      objeto.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      objeto.adult += 1;
    } else {
      objeto.senior += 1;
    }
  });
  return objeto;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  let total = 0;
  total += countEntrants(entrants).child * prices.child;
  total += countEntrants(entrants).adult * prices.adult;
  total += countEntrants(entrants).senior * prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
