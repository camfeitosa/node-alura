// ex 1
const saldo = 100
const deposito = 400
const saque = 50

const operacao = saldo + deposito - saque
console.log(`O saldo atual da sua conta é de ${operacao}`)

// ex 2

const num = 5
const imparOuPar = num % 2 === 0 ? 'Número Par' : 'Número Ímpar'
console.log(imparOuPar)

// ex 3

const adm = true
const logado = false

const acesso = logado && adm
console.log('Administrador logado no sistema:', acesso); 


// ex 4

const num1 = true
const num2 = false

const conferir = num1 || num2
console.log('Existem um variável verdadeira:', conferir); 

// ex 5

const idadeMinima = 18
const idadeUser = 17

if(idadeUser >= idadeMinima){
  console.log('Bem vindo, adicione um ingresso')
} else {
  console.log('Idade insuficiente para a compra')
}
