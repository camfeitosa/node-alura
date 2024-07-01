const notas = [7, 7, 8, 9];
const novaListaNotas = notas // não clonou o valor em si, fez apenas uma referencia e não uma cópia 

novaListaNotas.push(10) // Valor muda no array referenciado

console.log(notas)

// Spread operator -> espalha os conteudos do array
const novaListaClone = [...notas, 10] // == push(10)
// novaListaClone.push(10)