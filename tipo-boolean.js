const estudante = 'Murilo'
const estaAprovado = true

if (estaAprovado){
  console.log('Parabéns, boas festas')
} else {
  console.log('Reprovado')
}

if (estudante === 'Murilo'){ // é true?
  console.log(`Olá, ${estudante}`)
} else { // é false?
  console.log('Qual é seu nome?')
}

const aprovacao = estaAprovado ? 'Parabens' : 'Reprovado'
console.log(aprovacao)