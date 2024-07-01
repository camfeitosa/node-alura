const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const tamanhoNome = alunos.filter((aluno, indice) => { // dado e indice
  return aluno.length < 4 // filtra baseado em true ou false
}) // retorna um novo array com os resultados ingual o map

console.log(tamanhoNome)

const reprovados = alunos.filter((_, indice) => { // dado e indice
  return medias[indice] < 7 // filtra baseado em true ou false
}) // retorna um novo array com os resultados ingual o map

console.log(reprovados)





