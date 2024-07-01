// ex 1 (forEach estrutura) ✅
const numeros = [1, 4, 496, 5, 6, 10]

numeros.forEach(numero => console.log(numeros.indexOf(numero), numero))

const meuArray = ['a', 'b', 'c', 'd', 'e'];

meuArray.forEach((elemento, indice, array) => { // 1º Variavel que recebe o valor de cada indice | 2º Incrementador como parametro
  console.log(`Índice: ${indice}, Valor: ${elemento}, Array: ${array}`);
});

// function logArrayElements(element, index, array) { => pode receber esses três parametros
//   console.log("a[" + index + "] = " + element);
// }

 
// ex 2 ✅
const executaOperacaoEmArray = (arrayUser, callbackSoma)=>{
  return arrayUser.map(callbackSoma) // executa a função em cada elemento do array
}

function soma(num){
  return num * 2
}

const listaNumerosCallback = [1, 2, 3];
const listaSoma = executaOperacaoEmArray(listaNumerosCallback, soma);
console.log(listaSoma);


// ex 3 (REVISAR)
const listaNumeros = [5, 34, 45, 2, 90, 13]

listaNumeros.forEach((numero, i) => {
  console.log(`Indice: ${i}, Valor: ${numero}`)
})

for (let index = 0; index < listaNumeros.length; index++) {
  let num = 34
  if (listaNumeros[index] === num){
    console.log(index)
    break
  } else {
    console.log("-1")
  }
}

// ex 4 ✅ (.find)

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)

const nome = 'Pedro Almeida'
const procurar = todasAsTurmas.find(aluno => aluno === nome) // Retorna o valor do elemento caso achado ou undefined => Achou = String (true) => Não Achou = Undefined (false)
const decisao = procurar ? `${nome} está na lista` : 'Não encontrado'

console.table(todasAsTurmas)
console.log(procurar)
console.log(decisao)


// ex 5 (.FindIndex) ✅
const numerosArray = [6, 9, 12, 15, 18, 21];

numerosArray.forEach(numero => {
  let mult = numero * 3
  console.log(mult)
})

//retorna o index do elemento
const numero18 = numerosArray.findIndex(numero => numero === 18) // escreve da mesma maneira do .find(), mas tem outro retorno
// Retorna o indice do array caso encontrado | ou Retorna -1 indicando que o elemento não existe

if(numero18 !== -1){ //unica condição para caso seja diferente do número de retorno 
  console.log(`O número 18 está no índice ${numero18}`)
} else {
  console.log('O numero não está no Array')
}



