const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998'],
  endereco: [{
    rua: 'Av. Jaguari',
    numero: '23',
    complemento: 'apto 43'
  },
  {
    rua: 'Av. Paulista',
    numero: '12',
    complemento: ''
  }]
}

for (let chave in estudante) { // a cada iteração a let chave guarda as chaves do objeto
  const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
  console.log(texto)
  // console.log(estudante[chave]) pega apenas os valores
  //  console.log(chave)  pega apenas as chaves
}

// estudante['nome']

//  [object Object],[object Object] -> Js tentando converter objeto para string -> Template string converte a variavel para string

for (let chave in estudante) {
  const tipo = typeof estudante[chave]
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto)
  }
}

// typeoƒ do array é object