const notas = [10, 6, 8, 5.5, 10] // modifica o próprio array
notas.pop() // retira o ultimo numero do array

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media.toFixed(2))


