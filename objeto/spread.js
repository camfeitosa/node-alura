const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998','551199999998'],
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

function exibirTelefones(tel1, tel2){
  console.log(`ligar para ${tel1}`)
  console.log(`ligar para ${tel2}`)
}

// exibirTelefones(estudante.telefone[0], estudante.telefone[1])
exibirTelefones(...estudante.telefone) // espalha o conteudo do telefone

const dadosEnvio = {
  destinatario: estudante.nome,
  // endereco: estudante.endereco[0],
  // rua: estudante.endereco[0].rua
  ...estudante.endereco[0] // espalhou o objeto de endereço e espalhou
}

console.log(dadosEnvio)