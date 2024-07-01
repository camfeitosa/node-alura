// ex 1
const arrayNumeros = [1, 2, 2, 5, 40, 10, 10, 7, 5, 1]
const numeros = [... new Set(arrayNumeros)]
console.log(numeros)

const dobro = numeros.map((numero) => numero * 2)
console.log(dobro)

//ex 2
function verificaArray(arrayNumeros){
  const verifica = arrayNumeros.filter((numeros) => numeros > 10)
  console.log(verifica)
  
  if (verifica.length === arrayNumeros.length){
    return true
  } else {
    return false
  }
}
console.log(verificaArray(arrayNumeros))

// com every
const verificaTrue = arrayNumeros.every(num => num > 10)
console.log(`Com Every: ${verificaTrue}`)

// ex 3
const soma = arrayNumeros.reduce((acum, valor) => valor + acum,0)
console.log(soma)

// ex 4
const num = [2, 4, 7, 20, 3, 1]
const pares = num.filter((numero) => numero % 2 === 0) // map não iria funcionar pq retorna o resultado de todos os elementos do array => ex.: dobro
console.log(pares)

//ex 5
function verificaPositivos(arrayUser){
  const allPositive = arrayUser.every(num => num > 0); // every retorna true ou false
  const resultado = allPositive ? 'Todos os numeros são positivos' : 'Nem todos os numeros são positivos'
  return resultado
}

const arrayUser = [12, -34, 32]
console.log(verificaPositivos(arrayUser))

// ex 6
const encontrar = numeros.find(num => num % 2 == 0)
console.log(`Primeiro numero par encontrado: ${encontrar}`)