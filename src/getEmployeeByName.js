const data = require('../data/zoo_data');
// RESOLUÇÃO: (1º requito: se não tiver parâmetro, deve retornar um objeto vazio); (2º requisito: eu precisei fazer o object destructuring para acessar o employee do data. Se eu digitar no parâmetro o firstName ou lastName, deve retornar o a parte do objeto que se refere). Eu tive que criar elFirstName e elLastName porque o Lint estava reclamando do return longo.
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;
  return employees.find((element) => {
    const elFirstName = element.firstName;
    const elLastName = element.lastName;
    return elFirstName === employeeName || elLastName === employeeName;
  });
}
console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
