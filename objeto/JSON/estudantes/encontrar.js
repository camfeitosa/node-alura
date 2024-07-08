const estudantes = require('./estudantes.json')

function buscaInformacao(lista, chave, valor) {
  return lista.find(estudante => estudante[chave].includes(valor)) // includes acessa o valor dentro de arrays
}

// chave entre aspas
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet') 
console.log(estudanteEncontrado)

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '1918820860') 
console.log(telefoneEncontrado)