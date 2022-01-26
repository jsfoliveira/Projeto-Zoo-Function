const data = require('../data/zoo_data');
// RESOLUÇÃO: fiz o object destructuring para acessar o employees do data. como eu só quero verificar se o valor do parâmetro retorna true para algum elemento, usei o some. usei o includes para verificar: se contém o elemento, retorne true ou false. a sintaxe do include é caminho-do-array.include(elemento-que-quero-buscar).
function isManager(id) {
  const { employees } = data;
  return employees.some((element) => element.managers.includes(id) === true);
}
console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

// RESOLUÇÃO: acessei o employess através do objet destucturing. A primeira condição do if eu vi que podia fazer assim na aula de monitoria.  Se o responsável digitado no parâmetro da função for um gerente, retorne um array.filter e um array.map. Usei o filter para filtrar os elementos que forem gerente. Usei o array gerado do filter e coloquei um map para criar um novo array contendo a string com o firstName e lastName. Se não for gerente. retorne um erro.
function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    const gerente = employees.filter((element) => element.managers.includes(managerId) === true);
    return gerente.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
