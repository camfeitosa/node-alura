// ex 1 ✅ Spread
function juntarArrays(array1, array2, array3){
  const arrayAll = [...array1, ...array2, ...array3]
  console.log(arrayAll)
}
juntarArrays([12, 23, 34, 10], ['camila', 'murilo', 'joana', 'ana'], [true, false, null, undefined])

// ex 2 ✅
const valores = [12, 12, 12]

const soma = valores.reduce((acum, valor)=> valor + acum, 0)
console.log(soma)


// ex 3 ✅ concat + Set
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const cores = coresLista1.concat(coresLista2)
const coresSemRepetir = [...new Set(cores)]

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];

console.log(coresSemRepetir)

// ex 4 ✅ filter
function numeroPar(arrayNumeros){
  const pares = arrayNumeros.filter((numero) => numero % 2 == 0) 
  console.log(pares)
}
numeroPar([2, 12, 3, 7, 10])

// ex 5 ✅
function filtrarNumeros(arrayNumeros){
  return arrayNumeros.filter((numero) => numero % 3 == 0 && numero > 5) 
}
console.log(filtrarNumeros([2, 3, 15, 18, 12, 3, 7, 10]))


// ex 6 ✅
function somarElementos(arrayNumeros){
  const soma = arrayNumeros.reduce((acum, numero)=> numero + acum, 0)
  console.log(soma)
}
somarElementos([1, 2, 5, 35, 232])