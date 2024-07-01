//ex 1
const frase = 'Estudando Javascript'
console.log(frase.length)
console.log(frase.toLocaleUpperCase())

// ex2
let nulo = null
let nome
console.log(nulo, nome)

// ex 3
const numero = 2
const aluno = 'Camila'
const aprovado = true
console.log(`A aluna ${aluno} está aprovada ${aprovado} no ${2}º Bimestre`)

// ex 4
let num = 1
let algo = '3'

const numeroConvertido = String(num);
const textoConvertido = Number(algo);

console.log(typeof numeroConvertido, typeof textoConvertido)


// ex 5 

const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);