const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

// FOR OF
for (let nota of notas) { // nota = guarda cada elemento 
  somaDasNotas += nota // não precisa ser notas[nota] pois nota já é o elemento
}
const media = somaDasNotas / notas.length
console.log(`A nota da média é ${media}`)


// FOR CLASSICO
for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i] // pega o elemento de tal indice
}

// EXERCICIOS

const numeros = [2, 3, 5]
let soma = 0

for (let numero of numeros) {
  soma += numero
}
console.log(`A soma dos elementos é ${soma}`)


// EXEMPLO 2
const palavras = ['c', 'a', 'm', 'i', 'l', 'a']
let frase = ''

for (let letra of palavras) {
  frase += letra // ao somar strings = concatenar
}

console.log(frase)

// EXEMPLO 3

const valores = [1200, 23, 230, 235, 35345, 25466]
let maiorValorValores = 0

for (let valor of valores) {
  if (valor > maiorValorValores) {
    maiorValorValores = valor; // percorre o array inteiro e em cada iteração o valor da variavel é verificada e substituida ate encontrar
  }
  console.log(maiorValorValores)
}

console.log("O maior valor é:", maiorValorValores);

// EXEMPLO 4
const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;
let descontos = []

for (let preco of precos) { // preco armazena uma cópia do valor original do array
 let valor = preco * desconto;
 descontos.push(valor) // semelhante ao .append
}
console.log(descontos);

// const precos = [5.5, 6.2, 14, 19.5];

// let desconto = 0.90;

// for (let preco of precos) {
//  preco = preco * desconto; 
// }

// console.log(precos); // array não muda

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos);
