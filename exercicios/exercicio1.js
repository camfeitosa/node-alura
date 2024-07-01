// ex 1
const aluno = 'Rita'
const rm = 558808
const cadastro = true

console.log(typeof aluno)
console.log(typeof rm)
console.log(typeof cadastro)

// ex 2
const nome = 'Camila'
const sobrenome = 'Feitosa de Miranda Coutinho'
let nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)

nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)

// ex 3
let saudacao = 'Bom dia'
let hora = 9
const frase = `${saudacao}!! Agora são ${hora}:00 horas`
console.log(frase)

// ex 4
let teste = 'oi'
console.log(teste)

teste = 1
console.log(teste)

teste = false
console.log(teste)

teste = null
console.log(teste)

// ex 5

//var
var fora = 'Var Fora do bloco';

if (true) {
  var dentro = 'Var Dentro do bloco';
  console.log(fora); // retorna 'Fora do bloco'
  console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco' -> var global

// let
let foraLet = 'Let Fora do bloco';

if (true) {
  let dentroLet = 'Let Dentro do escopo'
  console.log(dentroLet)
  console.log(foraLet)
}

try {
  console.log(foraLet)
  console.log(dentroLet) // erro its not defined -> não foi definida dentro do escopo
} catch (error) {
  console.log(error.message)
}


// ex 6
let chuva = false

let mensagemTempo = chuva === true ? 'Leve o guarda-chuva ao sair de casa' : 'Não irá chover'

console.log(mensagemTempo)

const estaChovendo = true;

if (estaChovendo) {
  console.log('É melhor levar um guarda-chuva!');
} else {
  console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}