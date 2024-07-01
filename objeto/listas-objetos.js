const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998'],
  endereco: [{ // array com 1 elemento
    rua: 'Av. Jaguari',
    numero: '23',
    complemento: 'apto 43'
  }]
  
}

estudante.endereco.push({
  rua: 'Av. Paulista',
  numero: '12',
  complemento: ''
})

console.log(estudante.endereco)
console.log(estudante.endereco[0])

const listaEnderecosComComplemento = estudante.endereco.filter(endereco => endereco.complemento)

console.log(listaEnderecosComComplemento)