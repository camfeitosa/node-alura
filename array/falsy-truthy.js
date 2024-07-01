let word = 'oi'

if (word){
  console.log('Truthy')
} else {
  console.log('Falsy')
}

const testeTrue = word ? 'Truthy' : 'Falsy'
console.log(testeTrue)

word = ''

if (word){
  console.log('Truthy')
} else {
  console.log('Falsy')
}
const teste = word ? 'Truthy' : 'Falsy'
console.log(teste)