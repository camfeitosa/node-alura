const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante)

console.log(stringEstudante)
console.log(typeof stringEstudante) // string, pode mandar em uma requisição HTTP para o front-end
console.log(stringEstudante.nome) // deixou de ser um objeto 

const objEstudante = JSON.parse(stringEstudante) // transforma em objeto
console.log(objEstudante)
console.log(typeof objEstudante)
console.log(objEstudante.nome) // deixou de ser um objeto 