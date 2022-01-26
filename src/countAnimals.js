const data = require('../data/zoo_data');
// RESOLUÇÃO(parte 1): Se não for passado parâmetro, então retorne um objeto com o element.name e element.residents.length. O forEach vai percorrer cada item do objeto species. Dentro do forEach coloqui objeto[chave] = atribuição e depois retornei (peguei a dica de Luá no Slack).
function countAnimals(animal) {
    const { species } = data;
    if (animal === undefined) {
    const obj = {};
    species.forEach((element) => {
        obj[element.name] = element.residents.length;
    });
    return obj;
    }
}

module.exports = countAnimals;
