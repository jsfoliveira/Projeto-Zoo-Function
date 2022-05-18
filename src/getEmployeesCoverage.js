const data = require('../data/zoo_data');

const { employees } = data;
const infoRetorno = () => {

}

const retornoDaFuncao = () => {
  return employees.reduce((acc, curr) => {
    const objeto = {
      id: employees.id,
      fullName: `${employees.firstName} ${employees.lastName}`,
      species: infoRetorno,
      locations: infoRetorno,
    };
    acc.push(objeto);
  }, []);
};

function getEmployeesCoverage(options) {
  const buscar = employees
    .find((element) => element.firstName === options.name || element.lastName === options.name);
  if (buscar) {
    return retornoDaFuncao;
  } else {
    return throw new Error('Informações inválidas');
  }
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
