// ex 1
const saudacao = (nome) => `Olá, ${nome}, desejamos boas vindas`
console.log(saudacao('Lucia'))

// ex 2
const verificaIdade = (idade) => idade >= 18 ? 'maior de idade' : 'menor de idade'
console.log(verificaIdade(10))
console.log(verificaIdade(21))

// ex 3
function verificaPalindromo(palavra){
  let splitPalavra = palavra.split("") // divide a string em um array
  let inverteArray = splitPalavra.reverse()
  let juntaArray = inverteArray.join("") // inverte todos os elementos do array em uma string

  // maneira reduzida
  let palavraInvertida = palavra.split("").reverse().join("")


  if(palavra === palavraInvertida){
    return `A palavra ${palavra} é igual ${palavraInvertida}: É um Palíndromo`
  } else {
    return 'Não é palindromo'
  }
}

console.log(verificaPalindromo('arara'))

// ex 3
function verificaPalindromoFor(palavra){
  let palavraInvertida = ''

  for(let i = palavra.length - 1; i >= 0; i--){ // exemplo da contagem regressiva
    palavraInvertida += palavra[i]
  }

  if(palavra === palavraInvertida){
    console.log(`A palavra ${palavra} é igual ${palavraInvertida}: É um Palíndromo`)
  } else {
    console.log('Não é palindromo')
  }

  return palavraInvertida
}

console.log(verificaPalindromoFor('ada'))

// ex 4
const maiorNumero = function(a, b, c){
  if(a > b && a > c){
    return a
  } else if (b > c && b > a){
    return b
  } else {
    return c
  }
}
console.log(maiorNumero(3, 5, 2))

// ex 5
const calculaPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`); // Saída: O resultado de 2 elevado a 3 é: 8