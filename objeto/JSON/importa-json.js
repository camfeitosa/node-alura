// import estudante from './estudante.json'

const estudante = require('./estudante.json') // converteu para objeto 

console.log(estudante)
console.log(typeof estudante) // object

const chaves = Object.keys(estudante) // metodo de objetos
console.log(chaves)