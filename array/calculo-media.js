// const nota1 = 6
// const nota2 = 9
// const nota3 = 10
// const nota4 = 5
// const media = (nota1 + nota2 + nota3 + nota4) / 4

const notas = [10, 9, 6, 7.5]
// [0] índice do array
// Js pode criar array com diferentes tipos de dados (10, 'oi', true, [1, 2], {a: b})
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)
console.log(notas.length)

