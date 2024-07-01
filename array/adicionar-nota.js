const notas = [10, 6, 8] // possivel alterar array mesmo em uma const
notas.push(7) // adiciona ao final

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)

const arrayVazia = [,,,]; // arrays esparsos (sparse arrays)
console.log(arrayVazia.length)
console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)
