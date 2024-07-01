// ex1
const animais = ['coelho', 'cabra', 'cobra', 'cavalo', 'castor']
for (animal of animais){
  console.log(animal)
}

// ex 2
const numeroElemento = (arrayUser) =>{
  for (let i = 0; i < arrayUser.length; i++){
    console.log(i, arrayUser[i])
  }
}
numeroElemento([23, 1, 34, 35, 9, 10, 5])

// ex 3
const somaDeElemntos = (arrayUser) =>{
  let soma = 0

  for (let i = 0; i < arrayUser.length; i++){
    soma += arrayUser[i]
  }
  console.log(`A soma é ${soma}`)
}
somaDeElemntos([5, 10, 15])

// ex 4
const menorEMaiorValor = (arrayUser) =>{
  let menorValor = 0
  let maiorValor = 0

  for (let i = 0; i < arrayUser.length; i++){
    if (arrayUser[i] > maiorValor){
      maiorValor = arrayUser[i]
    } 

    if (arrayUser[i] < arrayUser.length){
      menorValor = arrayUser[i]
    }
  }

  // for (let numero of arrayUser){
  //   if (numero > maiorValor){
  //     maiorValor = numero
  //   } 

  //   if (numero < arrayUser.length){
  //     menorValor = numero
  //   }
  // }

  console.log(`O maior valor é ${maiorValor} e o menor número é ${menorValor}`)
}
menorEMaiorValor([5, 10, 15, 2, 454345, 32, 2356])

// ex 5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for(let numero of numeros){
  if (numero % 2 == 0){
    console.log(numero)
  }
}

// ex 6
let somaValores = 0
for(let numero of numeros){
  somaValores += numero
}
const media = somaValores / numeros.length
console.log(`A média é ${media}`)