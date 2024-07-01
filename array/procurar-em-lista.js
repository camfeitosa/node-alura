const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) { // retorna true ou false - ou inclui na lista ou não
    const indice = lista[0].indexOf(aluno) //index do parametro
    const mediaAluno = lista[1][indice]
    console.log(`${aluno} tem a média ${mediaAluno}`)
  } else {
    console.log('Estudante não existe na lista')
  }
}

exibeNomeENota('Caio')

// ex include
const frutas = ['Banana', 'Maçã', 'Laranja', 'Pêra']
const procura = frutas.includes('Melancia') ? 'Está na lista' : 'Não encontrado'

console.log(procura)

const index = frutas.indexOf('Laranja')
console.log(index)
