const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) { // executa a função para cada elemento do array | nota -> guarda o dado em cada iteração
  somaDasNotas += nota
})

// ForEach separado
notas.forEach(somaNotas) // referenciada sem chamar = somaNotas()
function somaNotas(nota) {
  somaDasNotas += nota
}


const media = somaDasNotas / notas.length
console.log(`A média é ${media}`)

// Método forEach não retorna nada, apenas executa o bloco

// Essa função vai ser executada para cada elemento do array. É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.

const lista = [1, 2, 3, 4, 5];
let soma = 0;

// Exemplo
lista.forEach(numero => soma += numero);
console.log(soma) //15
  
lista.forEach(numero => {
  soma += numero
});

//Qualquer tentativa de retornar resultados de forEach e armazená-los em variáveis vai resultar em undefined. 