const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) { // retorna true ou false - ou inclui na lista ou não

    const [alunos, medias] = lista // desestrutura array matriz criando duas variaveis

    const indice = alunos.indexOf(aluno) //index do parametro
    const mediaAluno = medias[indice]
    
    console.log(`${aluno} tem a média ${mediaAluno}`)
  } else {
    console.log('Estudante não existe na lista')
  }
}

exibeNomeENota('Caio')
exibeNomeENota('Mauro')