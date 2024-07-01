const notas = [10, 6.5, 8, 7.5];
const alunos = ['Isa', 'Ana', 'João', 'Muri']

let somaDasNotas = 0

for(let i = 0; i < notas.length; i++){
  somaDasNotas += notas[i] // incrementa com o valor atual da variavel
}

const media = somaDasNotas / notas.length
console.log(`A nota da média é ${media}`)


