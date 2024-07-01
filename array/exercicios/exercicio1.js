// ex 1
const arrayEsparso = [, 5, , 'Camila', ,,,true]
console.log(arrayEsparso)
console.log(arrayEsparso.length)

const arrayEsparso2 = []
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);


// ex 2
let frutas = ['melancia', 'uva', 'maçã', 'banana', 'abacaxi']
console.log(frutas)

frutas[0] = 'mamão' // substitui elemento do inicio
console.log(frutas)

// ex 3
let meuArray = []
meuArray.push(3, 5, 10)
console.log(meuArray)

meuArray[0] = meuArray[0] * 2
console.log(meuArray)

// ex 4
const numeros = []
numeros.push(2, 34, 344, 23, 1)
console.log(numeros)

// ex 5
const clinica = []
clinica.push('cachorro', 'gato', 'papagaio')
// clinica.push("Cachorro");
// clinica.push("Gato");
// clinica.push("Coelho");
console.log(clinica)

clinica.pop()
clinica.pop()
clinica.pop()
console.log(clinica)