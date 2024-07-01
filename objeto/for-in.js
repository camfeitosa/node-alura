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

for (let chave in estudante){ // a cada iteração a let chave guarda as chaves do objeto
  console.log(estudante[chave]) // pega apenas os valores
}