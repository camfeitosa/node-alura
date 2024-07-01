const estudante = {
  nome: 'Julia Silva', // propriedades => chave: nome, valor: 'Julia'
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript'
}

estudante.nome // 'Julia'

// quando não sabemos as chaves

function recebeInfoEstudante(objEstudante, infoEstudante){
  //console.log(objEstudante.nome) // não sabemos

  //notação de colchetes
  return objEstudante[infoEstudante]
}

console.log(recebeInfoEstudante(estudante, 'nome'))
console.log(recebeInfoEstudante(estudante, 'cpf'))

console.log(estudante['nome'])
console.log(estudante['cpf'])

// retorna undefined
console.log(estudante['pet'])
console.log(estudante.pet)

