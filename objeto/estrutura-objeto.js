const estudante = {
  nome: 'Julia', // propriedades => chave: nome, valor: 'Julia'
  idade: 17,
  cpf: '212234234',
  turma: 'JavaScript'
}

console.log(estudante)

// notação de ponto para acessar objeto
console.log(estudante.nome)
console.log(`O nome de estudante é ${ estudante.nome}`)
console.log(`Os tres primeiros numeros do cpf são ${estudante.cpf.substring(0, 3)}`)// metodo de strings
