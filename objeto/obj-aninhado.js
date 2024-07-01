const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998']
}
// o estudante não tem uma rua -> endereço tem rua -> outro objeto
estudante.endereco = {
  rua: 'Av. Jaguari',
  numero: '23',
  complemento: 'apto 43'
}

console.log(estudante)
console.log(estudante.endereco.rua)