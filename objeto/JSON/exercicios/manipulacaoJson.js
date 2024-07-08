const objAnimais = require('./animais.json')

const novo = {
  "id": 4,
  "nome": "Baleia",
  "tipo": "Mamífero",
  "habitat": "Oceano"
}

objAnimais.animais.push(novo) // objeteo animais, acessa animais
console.log(objAnimais)

// modifica propriedade
const modificar = objAnimais.animais.find(animal => animal.id === 3)
console.log(modificar)

if (modificar){
  modificar.habitat = 'Floresta'
}
console.log(objAnimais)

// remove animal

objAnimais.animais.splice(1, 1)  // (1 (começa do indice 1), 2(deleta 2 elementos 'contando com o indice 1'))

console.log(objAnimais, 'Segundo índice excluido [1]')

const objAnimaisStr = JSON.stringify(objAnimais)
console.log(objAnimaisStr)