const estudantes = require('./estudantes.json')

function filtraPorPropriedade(lista, propriedade){
  return lista.filter(estudante => {
    return !estudante.endereco.hasOwnProperty(propriedade)
  }) // tem a propriedade dele mesmo
}

const listEnderecosImcompletos = filtraPorPropriedade(estudantes, 'cep') // mostra todos os elementos que não possuem cep
console.log(listEnderecosImcompletos);