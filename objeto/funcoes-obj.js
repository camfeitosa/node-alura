const estudante = {
  nome: 'Julia Silva',
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript',
  bolsista: true,
  telefone: ['551199999998', '551199999998'],
  media: 7.5,
  estaAprovado: function(mediaBase){
    return this.media >= this.media ? true : false // this -> faz referencia ao contexto da função -> é a media daqui, desse objeto -> arrow function não funcionaria por causa do this
  }
}

console.log(estudante.estaAprovado(7))
// console.log() -> JS tem objetos prontos que tem funções prontas
// Método é uma função executada dentro de um contexto de um objeto