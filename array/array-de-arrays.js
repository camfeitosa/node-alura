const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias] // array dentro de array

console.log(lista) // Contem 2 elementos
console.table(lista)

// entre no array de posição 0 e acesse o elemento de index 1

console.log(
  `A aluna da posição 1 da lista é: ${lista[0][1]}.
  a nota dessa aluna é ${lista[1][1]}`
)

console.log(lista[0])

// Fazer operações matemáticas de matrizes, representar grids em jogo da velha, visualizar dados
